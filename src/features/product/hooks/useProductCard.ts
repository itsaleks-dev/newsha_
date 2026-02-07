import { useCallback, useMemo, useRef, useState } from "react";

import { useAppDispatch } from "@/app/store/hooks";

import type { ProductPreview, ProductVolumeOption } from "@/entities/product/types";

import { USE_PRODUCT_CARD_TEXT } from "@/features/product/config";
import { openCart } from "@/features/cart/model";
import { useCartActions } from "@/features/cart/hooks/useCartActions";

import { useToast } from "@/shared/ui/Toast/hooks";
import { animateFlyToCart } from "@/shared/lib/animation";

export function useProductCard(product: ProductPreview) {
  const dispatch = useAppDispatch();
  const cart = useCartActions();
  const toast = useToast();

  const imgRef = useRef<HTMLImageElement | null>(null);
  const qtyRef = useRef<HTMLSpanElement | null>(null);

  const volumes = useMemo<readonly ProductVolumeOption[]>(
    () => product.volumes ?? [],
    [product.volumes],
  );

  const defaultVolumeValue = useMemo<ProductVolumeOption["value"] | null>(() => {
    if (!volumes.length) return null;
    return volumes.reduce((a, b) => (b.price > a.price ? b : a)).value;
  }, [volumes]);

  const [selectedValue, setSelectedValue] = useState<ProductVolumeOption["value"] | null>(
    defaultVolumeValue,
  );

  const [qty, setQty] = useState(1);
  const safeQty = Math.max(1, qty);

  const selectedVolume = useMemo(
    () => volumes.find((v) => v.value === selectedValue),
    [volumes, selectedValue],
  );

  const currentImage = selectedVolume?.image ?? product.image;
  const unitPrice = selectedVolume?.price ?? product.price ?? 0;
  const totalPrice = unitPrice * safeQty;

  const canBuy = volumes.length ? selectedVolume?.inStock === true : true;

  const handleSelectVolume = useCallback((value: ProductVolumeOption["value"]) => {
    setSelectedValue(value);
    setQty(1);
  }, []);

  const handleIncrease = useCallback(() => {
    setQty((q) => q + 1);
  }, []);

  const handleDecrease = useCallback(() => {
    setQty((q) => Math.max(1, q - 1));
  }, []);

  const handleBuy = useCallback(() => {
    if (!canBuy || !selectedVolume) return;

    animateFlyToCart(imgRef.current);

    cart.add({
      productId: product.id,
      categoryId: product.categoryId,
      volume: selectedVolume.value,
      qty: safeQty,
    });

    dispatch(openCart());
    toast.success(USE_PRODUCT_CARD_TEXT.ADDED_TO_CART);
  }, [canBuy, selectedVolume, safeQty, cart, product.id, product.categoryId, dispatch, toast]);

  return {
    imgRef,
    qtyRef,
    volumes,
    selectedValue,
    selectedVolume,
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
