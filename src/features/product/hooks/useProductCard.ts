import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import type { ProductPreview, ProductVolume } from "@/entities/product/types";

import { useAppDispatch } from "@/app/store/hooks";
import { openCart } from "@/features/cart/model";
import { useCartActions } from "@/features/cart/hooks/useCartActions";

import { useToast } from "@/shared/ui/Toast/hooks";
import { animateFlyToCart } from "@/shared/lib/animation";
import { USE_PRODUCT_CARD_TEXT } from "@/features/product/config";

export function useProductCard(product: ProductPreview) {
  const dispatch = useAppDispatch();
  const cart = useCartActions();
  const toast = useToast();

  const imgRef = useRef<HTMLImageElement | null>(null);
  const qtyRef = useRef<HTMLSpanElement | null>(null);

  const volumes = useMemo(() => product.volumes ?? [], [product.volumes]);

  const [selected, setSelected] = useState<ProductVolume | null>(() => {
    if (!volumes.length) return null;
    return volumes.reduce((a, b) => (b.price > a.price ? b : a)).value;
  });

  const [qty, setQty] = useState(1);
  const safeQty = Math.max(1, qty);

  const selectedVolume = useMemo(
    () => volumes.find((v) => v.value === selected),
    [volumes, selected],
  );

  const currentImage = useMemo(
    () => selectedVolume?.image ?? product.image,
    [selectedVolume, product.image],
  );

  const unitPrice = selectedVolume?.price ?? product.price ?? 0;
  const totalPrice = unitPrice * safeQty;

  const canBuy = volumes.length ? selectedVolume?.inStock === true : true;

  const handleSelectVolume = useCallback((value: ProductVolume) => {
    setSelected(value);
    setQty(1);
  }, []);

  const handleIncrease = useCallback(() => {
    setQty((q) => q + 1);
  }, []);

  const handleDecrease = useCallback(() => {
    setQty((q) => Math.max(1, q - 1));
  }, []);

  const handleBuy = useCallback(() => {
    if (!canBuy) return;
    if (volumes.length && !selectedVolume) return;

    animateFlyToCart(imgRef.current);

    cart.add({
      productId: product.id,
      categoryId: product.categoryId,
      volume: selectedVolume?.value ?? null,
      qty: safeQty,
    });

    dispatch(openCart());
    toast.success(USE_PRODUCT_CARD_TEXT.ADDED_TO_CART);
  }, [
    canBuy,
    volumes.length,
    selectedVolume,
    safeQty,
    cart,
    product.id,
    product.categoryId,
    dispatch,
    toast,
  ]);

  useEffect(() => {
    const el = qtyRef.current;
    if (!el) return;

    el.classList.remove("bump");
    void el.offsetWidth;
    el.classList.add("bump");
  }, [safeQty]);

  return {
    imgRef,
    qtyRef,

    selected,
    qty: safeQty,
    currentImage,
    totalPrice,
    canBuy,

    productRating: product.rating ?? 0,
    productReviewsCount: product.reviewCount ?? 0,

    handleSelectVolume,
    handleIncrease,
    handleDecrease,
    handleBuy,
  };
}
