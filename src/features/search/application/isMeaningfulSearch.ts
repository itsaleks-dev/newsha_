export function isMeaningfulSearch(query: string) {
  const q = query.trim();
  if (q.length < 2) return false;
  if (/^[\d\s]+$/.test(q)) return false;
  return true;
}
