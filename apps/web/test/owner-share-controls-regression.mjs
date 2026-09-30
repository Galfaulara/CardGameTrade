import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';
import process from 'node:process';
import { setImmediate } from 'node:timers';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = p => fs.readFileSync(path.join(root, p), 'utf8');

// Exercise the production component handlers without installing a browser framework.
function component(file, name, extra = {}) {
  const state = []; let cursor = 0;
  const jsx = (type, props) => ({ type, props: props || {} });
  const react = { useState(initial) { const i = cursor++; if (!(i in state)) state[i] = initial; return [state[i], next => { state[i] = typeof next === 'function' ? next(state[i]) : next; }]; }, useRef(initial) { return { current: initial }; }, useEffect() {} };
  const exports = {};
  const context = { exports, console, URL, DOMException, setTimeout: () => 1, clearTimeout() {}, window: { location: { origin: 'https://deckdeal.test' } }, navigator: {}, ...extra,
    require(id) {
      if (id === 'react') return react;
      if (id === 'react/jsx-runtime') return { jsx, jsxs: jsx, Fragment: 'fragment' };
      if (id === 'next/navigation') return { useRouter: () => ({ refresh() {} }) };
      if (id.endsWith('.css')) return { __esModule: true, default: new Proxy({}, { get: (_, p) => p }) };
      if (id === './share-button') return { ShareButton: 'ShareButton' };
      if (id.includes('page-modal')) return { PageModal: 'PageModal' };
      throw Error(`Unexpected import: ${id}`);
    },
  };
  vm.runInNewContext(ts.transpileModule(read(file), { compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } }).outputText, context);
  return { render(props) { cursor = 0; return exports[name](props); }, context };
}
function nodes(value) {
  if (Array.isArray(value)) return value.flatMap(nodes);
  if (!value || typeof value !== 'object') return [];
  return [value, ...nodes(value.props?.children)];
}
const find = (tree, predicate) => nodes(tree).find(predicate);
const click = (tree, label) => { const button = find(tree, n => n.type === 'button' && n.props.children === label); assert(button, label); return button.props.onClick(); };
const settle = () => new Promise(resolve => setImmediate(resolve));
async function main() {
  const paths = ['/collections/c', '/wishlists/w'];
  for (const target of paths) {
    for (const visibility of ['public', 'unlisted', 'private']) {
      const c = component('components/share-button/owner-share-controls.tsx', 'OwnerShareControls');
      const tree = c.render({ path: target, title: 'My resource', visibility, updateUrl: '/api/me/resource' });
      const share = find(tree, n => n.type === 'ShareButton');
      assert.equal(share.props.path, target); assert.equal(share.props.disabled, visibility === 'private');
      assert.equal(Boolean(find(tree, n => n.props.children === 'Make shareable?')), visibility === 'private');
    }
    for (const success of [true, false]) {
      let finish; let request;
      const c = component('components/share-button/owner-share-controls.tsx', 'OwnerShareControls', { fetch: (url, options) => { request = { url, options }; return new Promise(resolve => { finish = resolve; }); } });
      const props = { path: target, title: 'My resource', visibility: 'private', updateUrl: '/api/me/resource' };
      let tree = c.render(props); click(tree, 'Make shareable?'); tree = c.render(props);
      assert(find(tree, n => n.type === 'PageModal'));
      assert(find(tree, n => n.props.children === 'This will allow anyone with the link to view this.'));
      click(tree, 'Make shareable'); tree = c.render(props);
      assert.equal(find(tree, n => n.type === 'ShareButton').props.disabled, true, 'Pending mutation must not enable Share');
      assert.equal(request.options.method, 'PATCH'); assert.equal(JSON.parse(request.options.body).visibility, 'unlisted');
      finish({ ok: success, json: async () => success ? { visibility: 'unlisted' } : { message: 'Forbidden' } });
      await settle(); tree = c.render(props);
      assert.equal(find(tree, n => n.type === 'ShareButton').props.disabled, !success);
      assert.equal(Boolean(find(tree, n => n.props.role === 'alert')), !success);
      assert(find(tree, n => n.props.children === (success ? 'unlisted' : 'private')));
    }
  }
  const unavailable = component('components/share-button/owner-share-controls.tsx', 'OwnerShareControls').render({ path: '/wishlists/w', title: 'Archived', visibility: 'private', eligible: false, updateUrl: '/api/me/wishlists/w' });
  assert.equal(find(unavailable, n => n.type === 'ShareButton').props.disabled, true);
  assert(!find(unavailable, n => n.props.children === 'Make shareable?'));
  for (const native of [true, false]) {
    const payloads = [], copied = [];
    const c = component('components/share-button/share-button.tsx', 'ShareButton', { navigator: { ...(native ? { share: async p => payloads.push(p) } : {}), clipboard: { writeText: async p => copied.push(p) } } });
    const props = { path: '/listings/exact-id', title: 'Listing', text: 'Listing on DeckDeal', label: 'Share' };
    await find(c.render(props), n => n.type === 'button').props.onClick(); await settle();
    assert.equal(native ? payloads[0].url : copied[0], 'https://deckdeal.test/listings/exact-id');
    if (native) assert.equal(copied.length, 0);
    else assert(find(c.render(props), n => n.props.children === 'Link copied'));
    await find(c.render({ ...props, disabled: true }), n => n.type === 'button').props.onClick(); await settle();
    assert.equal(payloads.length + copied.length, 1, 'Disabled Share emits no payload');
    for (const privatePath of ['/account/profile', '/account/inventory', '/store/s/handoffs/h']) assert.equal(c.render({ ...props, path: privatePath }), null);
  }
  const surfaces = {
    'app/(public)/account/inventory/inventory-manager.tsx': ['OwnerShareControls', '/collections/${sourceCollection.id}'],
    'app/(public)/account/wants/wants-manager.tsx': ['OwnerShareControls', '/wishlists/${selected.id}'],
    'app/(public)/account/profile/page.tsx': ['ShareButton', '/users/${profile.id}', 'disabled={!profile.public_profile_available}'],
    'app/(public)/account/listings/page.tsx': ['ShareButton', '?view=listings', 'Share trade list'],
    'app/(public)/store/[storeId]/page.tsx': ['ShareButton', '/stores/${storeId}', 'publicStore.status !== "ready"'],
  };
  for (const [file, contracts] of Object.entries(surfaces)) { const source = read(file); for (const contract of contracts) assert(source.includes(contract), `${file}: ${contract}`); assert.doesNotMatch(source, /<ShareButton[^>]*path=\{?`?"?\/account\//); }
  const inventory = read('app/(public)/account/inventory/inventory-manager.tsx');
  const listings = read('app/(public)/account/listings/listings-manager.tsx');
  assert(!inventory.includes('ShareButton')); assert(!listings.includes('ShareButton'));
  const wants = read('app/(public)/account/wants/wants-manager.tsx');
  assert.equal((wants.match(/<OwnerShareControls/g) || []).length, 1);
  assert(!wants.includes('ShareButton'));
  const sidebar = wants.slice(wants.indexOf('<nav className={styles.list}'), wants.indexOf('</nav>'));
  assert(!sidebar.includes('OwnerShareControls'));
  const rows = wants.slice(wants.indexOf('{selected.items.map'), wants.indexOf('{createOpen'));
  assert(!rows.includes('OwnerShareControls'));
  assert(wants.includes('aria-label="Selected Wishlist actions"'));
  assert(wants.includes('className={styles.visibilityGroup}'));
  assert(wants.includes('className={styles.contentActions}'));
  assert(wants.includes('+ Add card')); assert(wants.includes('Bulk add'));
  assert(!wants.includes('+ Add wanted card')); assert(!wants.includes('Bulk add wanted cards'));
  assert(wants.indexOf('+ Create wishlist') < wants.indexOf('aria-label="Selected Wishlist actions"'));
  const wantsCss = read('app/(public)/account/wants/page.module.css');
  assert(wantsCss.includes('width: 8rem'));
  assert(wantsCss.includes('white-space: nowrap'));
  assert(wantsCss.includes('flex-wrap: wrap'));
  for (const path of ['app/(public)/account/profile/page.tsx','app/(public)/store/[storeId]/page.tsx','app/(public)/account/listings/page.tsx']) assert.equal((read(path).match(/<ShareButton/g) || []).length,1);
  for (const path of ['app/(public)/listings/[listingId]/page.tsx','app/(public)/cards/[canonicalCardId]/page.tsx']) assert(read(path).includes('<ShareButton'));
  const css = read('components/share-button/owner-share-controls.module.css');
  assert(css.includes('flex-wrap: wrap')); assert(css.includes('min-height: 2.75rem')); assert(css.includes('max-width: 100%'));
  assert(read('app/(public)/account/inventory/page.module.css').includes('grid-template-rows: minmax(1.25rem, auto) auto;'));
  console.log('Owner Share controls: visibility, confirmation success/pending/failure, exact targets, native/clipboard, disabled payload, and responsive contracts passed.');
}
main().catch(error => { console.error(error); process.exitCode = 1; });
