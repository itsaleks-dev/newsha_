import type { ProductPreview } from "@/entities/product/types";

import { ProductCardBestsellerContainer } from "@/features/product/ui/ProductCardBestseller";

import { useSnapSlider } from "@/shared/hooks/useSnapSlider";

import * as S from "./MenSelection.styled";
import { MEN_SELECTION_TEXT, MEN_SELECTION_CONFIG } from "./config";

type Props = {
  products: ProductPreview[];
};

export function MenSelection({ products }: Props) {
  const items = products.slice(0, MEN_SELECTION_CONFIG.MAX_ITEMS);

  const { trackRef, active, scrollTo } = useSnapSlider({
    itemsCount: items.length,
    gap: MEN_SELECTION_CONFIG.GAP,
  });

  if (!items.length) return null;

  return (
    <S.Section>
      <S.Header>
        <S.Title>{MEN_SELECTION_TEXT.TITLE}</S.Title>
        <S.SubTitle>{MEN_SELECTION_TEXT.SUBTITLE}</S.SubTitle>
      </S.Header>

      <S.Track ref={trackRef}>
        {items.map((product) => (
          <S.Slide key={product.id}>
            <ProductCardBestsellerContainer product={product} />
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
