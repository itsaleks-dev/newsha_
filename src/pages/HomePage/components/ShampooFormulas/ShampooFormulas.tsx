import { useNavigate } from "react-router-dom";

import { SHAMPOO_FORMULAS, SHAMPOO_FORMULAS_BANNER, SHAMPOO_FORMULAS_SECTION } from "./config";
import * as S from "./ShampooFormulas.styled";

export function ShampooFormulas() {
  const navigate = useNavigate();

  return (
    <S.Section>
      <S.Header>
        <S.SectionTitle>{SHAMPOO_FORMULAS_SECTION.title}</S.SectionTitle>
        <S.SectionSubTitle>{SHAMPOO_FORMULAS_SECTION.subTitle}</S.SectionSubTitle>
      </S.Header>

      <S.Banner>
        <S.BannerImage src={SHAMPOO_FORMULAS_BANNER.image} alt={SHAMPOO_FORMULAS_BANNER.alt} />
      </S.Banner>

      <S.List>
        {SHAMPOO_FORMULAS.map((item) => (
          <S.Item key={item.key} onClick={() => navigate(item.link)}>
            <S.ItemText>
              <S.ItemTitle>{item.title}</S.ItemTitle>
              <S.ItemDescription>{item.description}</S.ItemDescription>
            </S.ItemText>

            <S.Arrow>›</S.Arrow>
          </S.Item>
        ))}
      </S.List>
    </S.Section>
  );
}
