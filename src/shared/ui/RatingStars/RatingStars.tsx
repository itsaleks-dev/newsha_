import type { RatingStarsProps } from "@/shared/ui/RatingStars/types";

import { RatingWrapper, Stars, Star, Fill, RatingValue, RatingCount } from "./RatingStars.styled";

export function RatingStars({
  rating = 0,
  reviews = 0,
  max = 5,
  showValue = true,
  showCount = true,
}: RatingStarsProps) {
  const safeRating = Math.min(Math.max(rating, 0), max);

  return (
    <RatingWrapper aria-label={`Rating ${safeRating} of ${max} based on ${reviews} reviews`}>
      <Stars aria-hidden="true">
        {Array.from({ length: max }).map((_, i) => {
          const fillPercent = Math.min(Math.max(safeRating - i, 0), 1) * 100;

          return (
            <Star key={i}>
              <span className="empty">☆</span>
              {fillPercent > 0 && <Fill style={{ width: `${fillPercent}%` }}>★</Fill>}
            </Star>
          );
        })}
      </Stars>

      {showValue && safeRating > 0 && <RatingValue>{safeRating.toFixed(1)}</RatingValue>}

      {showCount && reviews > 0 && <RatingCount>({reviews})</RatingCount>}
    </RatingWrapper>
  );
}
