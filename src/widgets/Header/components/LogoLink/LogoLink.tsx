import { productsApi } from "@/features/fakeBackend/product/api";

import { prefetch } from "@/shared/lib/cache";

import { Logo } from "@/widgets/Header/components/Logo";

import { HOME_PRODUCTS_PREFETCH_KEY } from "./config";

import { Root } from "./LogoLink.styled";

const prefetchHomeProducts = () =>
  prefetch(HOME_PRODUCTS_PREFETCH_KEY, () => productsApi.getProducts({ page: 1, limit: 8 }));

export function LogoLink() {
  return (
    <Root
      to="/"
      onMouseEnter={prefetchHomeProducts}
      onFocus={prefetchHomeProducts}
      onTouchStart={prefetchHomeProducts}
    >
      <Logo />
    </Root>
  );
}
