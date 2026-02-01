import type { RecentlyViewedItem } from "@/features/recentlyViewed/types";

import { getFromStorage, saveToStorage, removeFromStorage } from "@/shared/lib/storage";

const STORAGE_KEY = "recentlyViewed";

export function loadRecentlyViewed(): RecentlyViewedItem[] {
  return getFromStorage<RecentlyViewedItem[]>(STORAGE_KEY, []);
}

export function saveRecentlyViewed(items: RecentlyViewedItem[]) {
  saveToStorage(STORAGE_KEY, items);
}

export function clearRecentlyViewedStorage() {
  removeFromStorage(STORAGE_KEY);
}
