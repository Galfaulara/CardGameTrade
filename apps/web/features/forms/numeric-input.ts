export const sanitizeIntegerInput = (value: string) => value.replace(/\D/g, "");
export function sanitizeMoneyInput(value: string) {
  const normalized = value.replace(",", ".").replace(/[^\d.]/g, "");
  const [whole = "", ...rest] = normalized.split(".");
  return rest.length ? `${whole}.${rest.join("").slice(0, 2)}` : whole;
}
