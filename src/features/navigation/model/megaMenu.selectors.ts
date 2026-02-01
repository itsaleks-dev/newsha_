import type { RootState } from "@/app/store/rootReducer";

export const selectMegaMenu = (s: RootState) => s.megaMenu.active;
