import type { RatingStarsProps } from "@/shared/ui/RatingStars/types";

import * as S from "./RatingStars.styled";

export function RatingStars({
  rating = 0,
  reviews = 0,
  max = 5,
  showValue = true,
  showCount = true,
}: RatingStarsProps) {
  const safeRating = Math.min(Math.max(rating, 0), max);

  return (
    <S.RatingWrapper aria-label={`Rating ${safeRating} of ${max} based on ${reviews} reviews`}>
      <S.Stars aria-hidden="true">
        {Array.from({ length: max }).map((_, i) => {
          const fillPercent = Math.min(Math.max(safeRating - i, 0), 1) * 100;

          return (
            <S.Star key={i}>
              <span className="empty">☆</span>
              {fillPercent > 0 && <S.Fill style={{ width: `${fillPercent}%` }}>★</S.Fill>}
            </S.Star>
          );
        })}
      </S.Stars>

      {showValue && safeRating > 0 && <S.RatingValue>{safeRating.toFixed(1)}</S.RatingValue>}

      {showCount && reviews > 0 && <S.RatingCount>({reviews})</S.RatingCount>}
    </S.RatingWrapper>
  );
}
