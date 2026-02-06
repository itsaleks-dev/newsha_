import { useVerticalInfiniteScroll } from "@/shared/hooks/useVerticalInfiniteScroll";

import { REVIEWS_PREVIEW_DATA, REVIEWS_PREVIEW_TEXT as T } from "./config";
import * as S from "./ReviewsPreview.styled";

export function ReviewsPreview() {
  const trackRef = useVerticalInfiniteScroll<HTMLDivElement>({
    speed: 0.35,
  });

  return (
    <S.Section>
      <S.Header>
        <S.Title>{T.TITLE}</S.Title>
        <S.Subtitle>{T.SUBTITLE}</S.Subtitle>
      </S.Header>

      <S.Right>
        <S.Track ref={trackRef}>
          {[...REVIEWS_PREVIEW_DATA, ...REVIEWS_PREVIEW_DATA].map((r, i) => (
            <S.Item key={i}>
              <p>“{r.text}”</p>
              <span>{r.author}</span>
            </S.Item>
          ))}
        </S.Track>
      </S.Right>
    </S.Section>
  );
}
