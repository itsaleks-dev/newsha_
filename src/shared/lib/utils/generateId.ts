export function generateId(prefix: string): string {
  return `${prefix}-${crypto.randomUUID?.() ?? Date.now() + "-" + Math.random().toString(36).slice(2, 8)}`;
}
