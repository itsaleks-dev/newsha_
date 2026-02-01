import type { RootState } from "@/app/store/rootReducer";

export const selectCategories = (state: RootState) => state.category.items;
export const selectCategoriesStatus = (state: RootState) => state.category.status;
