import type { Review, ReviewStatus, ReviewRating } from "@/entities/review/types";
import type { User } from "@/entities/user/types";
import { USER_ROLES } from "@/entities/user/types";

import { ensureAdmin, ensureLogged, ensureAdminOrOwner } from "@/entities/user/guards";

import { wait } from "@/shared/lib/async";
import { asID, asISODate } from "@/shared/types/primitives";

import { DEFAULT_REVIEWS } from "@/features/fakeBackend/review/data";
import { REVIEWS_API_TEXT } from "@/features/fakeBackend/review/config";

let reviews: readonly Review[] = [...DEFAULT_REVIEWS];

export function resetReviews(data: Review[] = []) {
  reviews = [...data];
}

export const reviewsApi = {
  async getReviews(productId: Review["productId"]): Promise<readonly Review[]> {
    await wait();

    return reviews.filter((r) => r.productId === productId && r.status === "approved");
  },

  async getAllReviewsForProduct(
    productId: Review["productId"],
    admin: User,
  ): Promise<readonly Review[]> {
    await wait();
    ensureAdmin(admin);

    return reviews.filter((r) => r.productId === productId);
  },

  async addReview(
    productId: Review["productId"],
    data: {
      rating: ReviewRating;
      text?: string;
      photos?: string[];
    },
    user: User,
  ): Promise<Review> {
    await wait();
    ensureLogged(user, REVIEWS_API_TEXT.AUTH_ONLY_REVIEW);

    const now = asISODate(new Date().toISOString());

    const review: Review = {
      id: asID(`review-${Date.now()}`),
      productId,
      userId: user.id,
      userName: user.name,
      rating: data.rating,
      status: "pending",
      createdAt: now,
      updatedAt: now,
      photos: data.photos ?? [],
      ...(data.text ? { text: data.text } : {}),
    };

    reviews = [...reviews, review];
    return review;
  },

  async updateReview(
    id: Review["id"],
    patch: Partial<Pick<Review, "rating" | "text" | "photos">>,
    user: User,
  ): Promise<Review> {
    await wait();

    const existing = reviews.find((r) => r.id === id);
    if (!existing) {
      throw new Error(REVIEWS_API_TEXT.REVIEW_NOT_FOUND);
    }

    ensureAdminOrOwner(user, existing.userId, REVIEWS_API_TEXT.INSUFFICIENT_RIGHTS);

    const updated: Review = {
      ...existing,
      ...patch,
      status: user.role === USER_ROLES.ADMIN ? existing.status : "pending",
      updatedAt: asISODate(new Date().toISOString()),
    };

    reviews = reviews.map((r) => (r.id === id ? updated : r));
    return updated;
  },

  async deleteReview(id: Review["id"], user: User): Promise<boolean> {
    await wait();

    const existing = reviews.find((r) => r.id === id);
    if (!existing) return false;

    ensureAdminOrOwner(user, existing.userId, REVIEWS_API_TEXT.INSUFFICIENT_RIGHTS);

    reviews = reviews.filter((r) => r.id !== id);
    return true;
  },

  async setStatus(id: Review["id"], status: ReviewStatus, admin: User): Promise<Review> {
    await wait();
    ensureAdmin(admin);

    const existing = reviews.find((r) => r.id === id);
    if (!existing) {
      throw new Error(REVIEWS_API_TEXT.REVIEW_NOT_FOUND);
    }

    const updated: Review = {
      ...existing,
      status,
      updatedAt: asISODate(new Date().toISOString()),
    };

    reviews = reviews.map((r) => (r.id === id ? updated : r));
    return updated;
  },
};
