import type { Slug } from "@/shared/types/primitives";

export const ROUTES = {
  HOME: "/",
  CATALOG: "/catalog",
  CATALOG_ROUTE: "/catalog/:slug",
  CATEGORY: (slug: Slug) => `/catalog/${slug}`,
  PRODUCTS: "/products",
  PRODUCT_ROUTE: "/products/:slug",
  PRODUCT: (slug: Slug) => `/products/${slug}`,
  NEEDS_ROUTE: "/needs/:slug?",
  NEEDS: (slug?: Slug) => (slug ? `/needs/${slug}` : "/needs"),
  CONDITION_ROUTE: "/condition/:root?/:slug?",
  CONDITION: (root?: Slug, slug?: Slug) => {
    if (slug) return `/condition/${slug}`;
    if (root) return `/condition/${root}`;
    return "/condition";
  },
  ABOUT_NEWSHA: "/about-newsha",
  CONTACT_US: "/contact-us",
  COOPERATION: "/cooperation",
  DELIVERY_PAYMENT: "/delivery-payment",
  PRIVACY_POLICY: "/privacy-policy",
  PUBLIC_OFFER: "/public-offer",
  RETURN_EXCHANGE: "/return-exchange",
  CHECKOUT: "/checkout",
  ACCOUNT: "/account",
} as const;
