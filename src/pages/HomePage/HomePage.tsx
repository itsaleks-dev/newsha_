import { BannerSlider } from "./components/BannerSlider";
import { CategoryPills } from "./components/CategoryPills";
import { InstagramBlock } from "./components/InstagramBlock";
import { ReviewsPreview } from "./components/ReviewsPreview";

export function HomePage() {
  return (
    <>
      <BannerSlider placement="home-hero" />
      <CategoryPills />
      <ReviewsPreview />
      <InstagramBlock />
    </>
  );
}

export default HomePage;
