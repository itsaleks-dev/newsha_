import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { fetchProducts } from "@/features/product/model/product.thunks";
import { selectProductStatus } from "@/features/product/model";

import { ProductList } from "@/features/product/ui/ProductList";

export function CatalogPage() {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectProductStatus);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  return <ProductList />;
}
