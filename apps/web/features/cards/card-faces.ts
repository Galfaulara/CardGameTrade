export type CardFace = {
  name: string | null; mana_cost: string | null; type_line: string | null; oracle_text: string | null;
  power: string | null; toughness: string | null; loyalty: string | null; defense: string | null;
  image_small_uri: string | null; image_normal_uri: string | null; image_large_uri: string | null;
};

export const TRUE_DFC_LAYOUTS = new Set(["modal_dfc", "transform"]);

export function trueDfcFaces(printing: { layout?: string | null; faces?: CardFace[] | null } | null | undefined) {
  if (!printing?.layout || !TRUE_DFC_LAYOUTS.has(printing.layout) || !printing.faces?.[0] || !printing.faces[1]) return null;
  const image = (face: CardFace) => face.image_large_uri ?? face.image_normal_uri ?? face.image_small_uri;
  if (!image(printing.faces[0]) || !image(printing.faces[1])) return null;
  return [printing.faces[0], printing.faces[1]] as const;
}

