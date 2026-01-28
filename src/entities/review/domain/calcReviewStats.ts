import type { Review, ReviewStats, ReviewRating } from "@/entities/review/types/review.types";

const EMPTY_STATS: ReviewStats = {
  average: 0,
  count: 0,
  stars: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  } satisfies Record<ReviewRating, number>,
};

export function calcReviewStats(reviews: Review[]): ReviewStats {
  const approved = reviews.filter((r) => r.status === "approved");

  if (approved.length === 0) return { ...EMPTY_STATS };

  let sum = 0;
  const stars = { ...EMPTY_STATS.stars };

  for (const { rating } of approved) {
    sum += rating;
    stars[rating]++;
  }

  return {
    average: Number((sum / approved.length).toFixed(2)),
    count: approved.length,
    stars,
  };
}
