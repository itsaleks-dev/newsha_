import type { RootState } from "@/app/store/rootReducer";

export const selectBurgerOpen = (s: RootState) => s.burgerUI.open;
export const selectBurgerExpanded = (s: RootState) => s.burgerUI.expanded;
