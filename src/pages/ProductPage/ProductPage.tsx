import { useMemo, useRef, useState } from "react";
import { useParams, Navigate } from "react-router-dom";

import type { ProductVolumeOption } from "@/entities/product/types";

import { ALL_PRODUCTS } from "@/features/fakeBackend/product/data";
import { VolumeSelectorList } from "@/features/product/ui/VolumeSelectorList";

import { QuantityControl } from "@/shared/ui/QuantityControl";
import { formatPrice } from "@/shared/lib/formatPrice";

import * as S from "./ProductPage.styled";

export function ProductPage() {
  const { slug } = useParams<{ slug: string }>();

  const product = useMemo(() => ALL_PRODUCTS.find((p) => p.slug === slug), [slug]);

  if (!product) {
    return <Navigate to="/error/404" replace />;
  }

  const volumes = product.volumes ?? [];

  const [selectedValue, setSelectedValue] = useState<ProductVolumeOption["value"] | null>(
    volumes[0]?.value ?? null,
  );

  const [qty, setQty] = useState(1);
  const qtyRef = useRef<HTMLSpanElement>(null);

  const selectedOption = useMemo(
    () => volumes.find((v) => v.value === selectedValue) ?? null,
    [volumes, selectedValue],
  );

  const image = selectedOption?.image ?? product.gallery.find((g) => g.type === "image")?.url ?? "";

  const price = selectedOption?.price ?? product.basePrice ?? 0;

  return (
    <S.Page>
      <S.Top>
        <S.ImageWrap>
          <img src={image} alt={product.name} />

          {volumes.length > 0 && (
            <S.VolumeFloating>
              <VolumeSelectorList
                volumes={volumes}
                selected={selectedValue}
                onSelect={setSelectedValue}
              />
            </S.VolumeFloating>
          )}
        </S.ImageWrap>

        <S.Info>
          <S.Title>
            <span className="en">{product.nameEn}</span>
            <span className="ua">{product.nameUa}</span>
          </S.Title>

          <S.ShortDescription>{product.shortDescription}</S.ShortDescription>

          <S.Price>{formatPrice(price * qty)}</S.Price>

          <S.BuyRow>
            <S.BuyBtn>Додати в кошик</S.BuyBtn>

            <QuantityControl
              key={selectedValue}
              value={qty}
              valueRef={qtyRef}
              onDecrease={() => setQty((v) => Math.max(1, v - 1))}
              onIncrease={() => setQty((v) => v + 1)}
            />
          </S.BuyRow>
        </S.Info>
      </S.Top>

      <S.Description>
        <h2>Опис</h2>
        <p>{product.description}</p>
      </S.Description>
    </S.Page>
  );
}
