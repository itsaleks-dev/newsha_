import type { ProductPreview } from "@/entities/product/types";

import { ProductCardBestsellerContainer } from "@/features/product/ui/ProductCardBestseller";

import { useSnapSlider } from "@/shared/hooks/useSnapSlider";

import * as S from "./BestSellers.styled";
import { BESTSELLERS_TEXT, BESTSELLERS_CONFIG } from "./config";

type Props = {
  products: ProductPreview[];
};

export function BestSellers({ products }: Props) {
  const bestsellers = products.filter((p) => p.isBestseller);

  const items = (bestsellers.length ? bestsellers : products).slice(
    0,
    BESTSELLERS_CONFIG.MAX_ITEMS,
  );

  const hasItems = items.length > 0;

  const { trackRef, active, scrollTo } = useSnapSlider({
    itemsCount: items.length,
    gap: BESTSELLERS_CONFIG.GAP,
  });

  return (
    <S.Section>
      <S.Header>
        <S.Title>{BESTSELLERS_TEXT.TITLE}</S.Title>
        <S.SubTitle>{BESTSELLERS_TEXT.SUBTITLE}</S.SubTitle>
      </S.Header>

      <S.Track ref={trackRef}>
        {hasItems
          ? items.map((product) => (
              <S.Slide key={product.id}>
                <ProductCardBestsellerContainer product={product} />
              </S.Slide>
            ))
          : Array.from({ length: BESTSELLERS_CONFIG.MAX_ITEMS }).map((_, i) => (
              <S.Slide key={`skeleton-${i}`}>
                <div
                  style={{
                    height: 520,
                    borderRadius: 26,
                    background: "#eee",
                  }}
                />
              </S.Slide>
            ))}
      </S.Track>

      <S.Indicators>
        {items.map((_, i) => (
          <S.Dot key={i} $active={i === active} onClick={() => scrollTo(i)} />
        ))}
      </S.Indicators>
    </S.Section>
  );
}
