import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { fetchProducts, selectProductPreviews } from "@/features/product/model";

import { BannerSlider } from "./components/BannerSlider";
import { CategoryPills } from "./components/CategoryPills";
import { BestSellers } from "./components/BestSellers";
import { HairConcerns } from "./components/HairConcerns";
import { NeedsCTA } from "./components/NeedsCTA";
import { MenSelection } from "./components/MenSelection";
import { FAQPreview } from "./components/FAQPreview/FAQPreview";
import { ShampooFormulas } from "./components/ShampooFormulas";
import { BrandPhilosophy } from "./components/BrandPhilosophy";
import { ReviewsPreview } from "./components/ReviewsPreview";
import { InstagramBlock } from "./components/InstagramBlock";

export function HomePage() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProductPreviews);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <BannerSlider placement="home-hero" />
      <CategoryPills />
      <BestSellers products={products} />
      <HairConcerns />
      <NeedsCTA />
      <MenSelection products={products} />
      <FAQPreview />
      <ShampooFormulas />
      <BrandPhilosophy />
      <ReviewsPreview />
      <InstagramBlock />
    </>
  );
}

export default HomePage;
