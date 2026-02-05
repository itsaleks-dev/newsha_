import type { Banner } from "@/features/banner/types";
import * as S from "../BannerSlider.styled";
import { Link } from "react-router-dom";

type Props = {
  banner: Banner;
  isHero?: boolean;
};

export function Slide({ banner, isHero }: Props) {
  return (
    <S.Slide>
      <img
        src={banner.image}
        alt={banner.alt ?? banner.title ?? "Banner"}
        loading="lazy"
        draggable={false}
      />

      {isHero && (
        <S.Content>
          {banner.subTitle && <S.SubTitle>{banner.subTitle}</S.SubTitle>}
          {banner.title && <S.Title>{banner.title}</S.Title>}

          {banner.buttonText && (
            <S.Button as={Link} to={banner.link ?? "/catalog"}>
              {banner.buttonText}
            </S.Button>
          )}
        </S.Content>
      )}
    </S.Slide>
  );
}
