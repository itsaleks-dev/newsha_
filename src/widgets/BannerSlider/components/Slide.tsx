import type { Banner } from "@/features/banner/types";
import * as S from "../BannerSlider.styled";

type Props = {
  banner: Banner;
};

export function Slide({ banner }: Props) {
  return (
    <S.Slide>
      <img
        src={banner.image}
        alt={banner.alt ?? banner.title ?? "Banner"}
        loading="lazy"
        draggable={false}
      />
    </S.Slide>
  );
}
