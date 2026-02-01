import type { RecentlyViewedItem } from "@/features/recentlyViewed/types";

import {
  loadRecentlyViewed,
  saveRecentlyViewed,
  clearRecentlyViewedStorage,
} from "@/features/recentlyViewed/storage";

const MAX_ITEMS = 10;

export function addRecentlyViewed(slug: string) {
  if (!slug) return;

  const now = new Date().toISOString();
  const saved = loadRecentlyViewed();

  const updated: RecentlyViewedItem[] = [
    { slug, viewedAt: now },
    ...saved.filter((i) => i.slug !== slug),
  ].slice(0, MAX_ITEMS);

  saveRecentlyViewed(updated);
}

export function getRecentlyViewed(): RecentlyViewedItem[] {
  return loadRecentlyViewed();
}

export function getRecentlyViewedSlugs(): string[] {
  return getRecentlyViewed().map((i) => i.slug);
}

export function clearRecentlyViewed() {
  clearRecentlyViewedStorage();
}
