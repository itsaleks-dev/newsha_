export type DisplayCurrency = "грн";

export function formatPrice(value: number | string, currency: DisplayCurrency = "грн"): string {
  const num = typeof value === "string" ? Number(value.replace(",", ".")) : value;

  if (!Number.isFinite(num)) {
    return `0.00 ${currency}`;
  }

  return `${num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ${currency}`;
}
