import type { Banner } from "@/features/banner/types";

export const BANNER_CONFIG: Record<string, Omit<Banner, "id">[]> = {
  "home-hero": [
    {
      placement: "home-hero",
      image: "/images/others/youre-kind-red.webp",
      alt: "NEWSHA professional care",
      title: "Професійний догляд за волоссям",
      subTitle: "Преміальні продукти для тебе",
      buttonText: "Каталог",
    },
    {
      placement: "home-hero",
      image: "/images/others/body-care-banner.webp",
      alt: "Luxury hair treatment",
    },
    {
      placement: "home-hero",
      image: "/images/others/inst2.webp",
      alt: "Exclusive formulas",
    },
  ],
};
