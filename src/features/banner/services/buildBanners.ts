import type { Banner, BannerPlacement } from "@/features/banner/types";
import { BANNER_CONFIG } from "@/pages/HomePage/components/BannerSlider/config";
import { asID } from "@/shared/types/primitives";

export function buildBanners(placement: BannerPlacement): Banner[] {
  const items = BANNER_CONFIG[placement] ?? [];

  return items.map((item, index) => {
    const banner: Banner = {
      id: asID(`${placement}-${index}`),
      placement,
      image: item.image,
    };

    if (item.link) banner.link = item.link;
    if (item.alt) banner.alt = item.alt;
    if (item.title) banner.title = item.title;
    if (item.subTitle) banner.subTitle = item.subTitle;
    if (item.buttonText) banner.buttonText = item.buttonText;

    return banner;
  });
}
