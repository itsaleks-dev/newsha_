import type { ID } from "@/shared/types";

export const REVIEW_STATUS = {
  Pending: "pending",
  Approved: "approved",
  Rejected: "rejected",
} as const;

export type ReviewStatus = (typeof REVIEW_STATUS)[keyof typeof REVIEW_STATUS];

export type ReviewRating = 1 | 2 | 3 | 4 | 5;

export type Review = {
  id: ID;
  productId: ID;
  userId: ID;
  userName: string;
  rating: ReviewRating;
  text?: string;
  photos?: readonly string[];
  status: ReviewStatus;
  createdAt: string;
  updatedAt: string;
};

export type ReviewStats = {
  average: number;
  count: number;
  stars: Record<ReviewRating, number>;
};
