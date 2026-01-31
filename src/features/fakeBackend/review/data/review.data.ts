import type { Review } from "@/entities/review/types";
import { asID, asISODate } from "@/shared/types/primitives";

export const DEFAULT_REVIEWS: Review[] = [
  {
    id: asID("review-1"),
    productId: asID("product-1"),
    userId: asID("user-1"),
    userName: "Aleksandr",
    rating: 5,
    text: "Дуже крутий продукт!",
    photos: [],
    status: "approved",
    createdAt: asISODate(new Date().toISOString()),
    updatedAt: asISODate(new Date().toISOString()),
  },
];
