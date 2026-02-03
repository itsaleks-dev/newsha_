import type { Banner } from "@/features/banner/types";

export const BANNER_CONFIG: Record<string, Omit<Banner, "id">[]> = {
  "home-hero": [
    {
      placement: "home-hero",
      image: "/images/banner-page/banner-hero.webp",
      alt: "NEWSHA professional care",
      title: "Professional Hair Care",
      subTitle: "Premium products for salons",
      buttonText: "Shop now",
    },
    {
      placement: "home-hero",
      image: "/banners/home-hero-2.jpg",
      alt: "Luxury hair treatment",
    },
    {
      placement: "home-hero",
      image: "/banners/home-hero-3.jpg",
      alt: "Exclusive formulas",
    },
  ],
};
