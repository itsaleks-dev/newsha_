import { STORAGE_KEYS } from "@/shared/constants/storage";
import { getFromStorage, saveToStorage, removeFromStorage } from "@/shared/lib/storage";

const TOKEN_KEY = STORAGE_KEYS.TOKEN;

export const tokenStorage = {
  get(): string | null {
    return getFromStorage<string | null>(TOKEN_KEY, null);
  },

  set(token: string): void {
    saveToStorage(TOKEN_KEY, token);
  },

  clear(): void {
    removeFromStorage(TOKEN_KEY);
  },
};
