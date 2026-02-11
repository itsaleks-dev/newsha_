import type { Banner } from "@/features/banner/types";

export const BANNER_CONFIG: Record<string, Omit<Banner, "id">[]> = {
  "home-hero": [
    {
      placement: "home-hero",
      image: "/images/banner-page/banner2.webp",
      alt: "NEWSHA professional care",
      title: "Професійний догляд за волоссям",
      subTitle: "Преміальні продукти для тебе",
      buttonText: "Каталог",
    },
    {
      placement: "home-hero",
      image: "/images/banner-page/banner1.webp",
      alt: "Luxury hair care shampoo",
      title: "Відновлення з першого миття",
      subTitle: "Шампуні з професійними формулами для сили та блиску волосся",
      buttonText: "Обрати шампунь",
    },
    {
      placement: "home-hero",
      image: "/images/banner-page/banner3.webp",
      alt: "Professional cleansing shampoo",
      title: "Чиста шкіра голови — здорове волосся",
      subTitle: "Делікатне очищення та баланс без пересушування",
      buttonText: "Перейти до каталогу",
    },
  ],
};
