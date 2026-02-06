import { useNavigate } from "react-router-dom";

import { MAIN_CATEGORIES } from "@/features/fakeBackend/category/data";

import { useSnapSlider } from "@/shared/hooks";

import { TOP_CATEGORIES_TEXT } from "./config";
import * as S from "./CategoryPills.styled";

export function CategoryPills() {
  const navigate = useNavigate();

  const { trackRef, active, scrollTo } = useSnapSlider({
    itemsCount: MAIN_CATEGORIES.length,
    gap: 16,
  });

  return (
    <S.Section>
      <S.Header>
        <S.Title>{TOP_CATEGORIES_TEXT.TITLE}</S.Title>
        <S.SubTitle>{TOP_CATEGORIES_TEXT.SUBTITLE}</S.SubTitle>
      </S.Header>

      <S.Track ref={trackRef}>
        {MAIN_CATEGORIES.map((cat) => (
          <S.Card key={cat.id} onClick={() => navigate(`/catalog/${cat.slug}`)}>
            <S.Image src={cat.image} alt={cat.name} loading="lazy" />
            <S.Overlay />
            <S.Pill>
              <S.CategoryTitle>{cat.name}</S.CategoryTitle>
            </S.Pill>
          </S.Card>
        ))}
      </S.Track>

      <S.Indicators>
        {MAIN_CATEGORIES.map((_, i) => (
          <S.Dot key={i} $active={i === active} onClick={() => scrollTo(i)} />
        ))}
      </S.Indicators>
    </S.Section>
  );
}
