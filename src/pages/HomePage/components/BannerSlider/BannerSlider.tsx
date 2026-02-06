import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

import { loadBanners, makeSelectBannersByPlacement } from "@/features/banner/model";
import type { BannerPlacement } from "@/features/banner/types";

import { useSnapSlider } from "@/shared/hooks/useSnapSlider";

import { Slide } from "./components";
import * as S from "./BannerSlider.styled";

type Props = {
  placement: BannerPlacement;
};

export function BannerSlider({ placement }: Props) {
  const dispatch = useAppDispatch();
  const banners = useAppSelector(makeSelectBannersByPlacement(placement));

  const { trackRef, active, scrollTo } = useSnapSlider({
    itemsCount: banners.length,
  });

  useEffect(() => {
    dispatch(loadBanners(placement));
  }, [dispatch, placement]);

  if (!banners.length) return null;

  return (
    <S.Section>
      <S.Track ref={trackRef}>
        {banners.map((banner) => (
          <Slide key={banner.id} banner={banner} />
        ))}
      </S.Track>

      <S.Indicators>
        {banners.map((_, i) => (
          <S.Dot key={i} $active={i === active} onClick={() => scrollTo(i)} />
        ))}
      </S.Indicators>
    </S.Section>
  );
}
