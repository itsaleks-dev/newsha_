import type { ID, Slug } from "@/shared/types";

export type BannerPlacement =
  | "home-hero"
  | "home-promo"
  | "catalog-top"
  | "sale-page"
  | "checkout-warning";

export type Banner = {
  id: ID;
  placement: BannerPlacement;
  image: string;
  link?: Slug;
  alt?: string;
  title?: string;
  subTitle?: string;
  buttonText?: string;
};
