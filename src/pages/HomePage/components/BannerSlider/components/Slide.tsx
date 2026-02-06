import { Link } from "react-router-dom";

import type { Banner } from "@/features/banner/types";

import * as S from "../BannerSlider.styled";

type Props = {
  banner: Banner;
};

export function Slide({ banner }: Props) {
  return (
    <S.SlideRoot>
      <img
        src={banner.image}
        alt={banner.alt ?? banner.title ?? "Banner"}
        loading="lazy"
        draggable={false}
      />

      <S.Content>
        {banner.subTitle && <S.SubTitle>{banner.subTitle}</S.SubTitle>}
        {banner.title && <S.Title>{banner.title}</S.Title>}

        {banner.buttonText && (
          <S.Button as={Link} to={banner.link ?? "/catalog"}>
            {banner.buttonText}
          </S.Button>
        )}
      </S.Content>
    </S.SlideRoot>
  );
}
