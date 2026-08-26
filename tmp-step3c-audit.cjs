require("dotenv").config();
const { Client } = require("pg");

(async () => {
  const client = new Client({ connectionString: process.env.DATABASE_URL });
  await client.connect();
  const users = await client.query("SELECT id, username, display_name, auth_provider, auth_user_id, status FROM user_profiles ORDER BY created_at, id");
  const indexes = await client.query("SELECT indexname, indexdef FROM pg_indexes WHERE schemaname = 'public' AND tablename = 'user_profiles' ORDER BY indexname");
  const columns = await client.query("SELECT column_name, is_nullable, column_default, data_type FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'user_profiles' AND column_name IN ('username', 'display_name', 'auth_provider', 'auth_user_id', 'email', 'status') ORDER BY ordinal_position");
  const collisions = await client.query("SELECT lower(btrim(username)) AS normalized, count(*)::int AS count, array_agg(username ORDER BY username) AS usernames, array_agg(id ORDER BY id) AS ids FROM user_profiles WHERE username IS NOT NULL GROUP BY lower(btrim(username)) HAVING count(*) > 1 ORDER BY normalized");
  const nulls = await client.query("SELECT count(*)::int AS null_usernames FROM user_profiles WHERE username IS NULL");
  console.log(JSON.stringify({ columns: columns.rows, indexes: indexes.rows, users: users.rows, collisions: collisions.rows, nulls: nulls.rows[0] }, null, 2));
  await client.end();
})().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
