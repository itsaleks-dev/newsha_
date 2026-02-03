import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { loadBanners } from "@/features/banner/model";
import { makeSelectBannersByPlacement } from "@/features/banner/model";
import type { BannerPlacement } from "@/features/banner/types";

import { useBannerSlider } from "./hooks/useBannerSlider";
import { Slide } from "./components/Slide";
import { Dots } from "./components/Dots";
import * as S from "./BannerSlider.styled";

type Props = {
  placement: BannerPlacement;
};

export function BannerSlider({ placement }: Props) {
  const dispatch = useAppDispatch();
  const banners = useAppSelector(makeSelectBannersByPlacement(placement));

  useEffect(() => {
    dispatch(loadBanners(placement));
  }, [dispatch, placement]);

  const slider = useBannerSlider(banners.length);
  if (banners.length === 0) return null;

  const slides = [banners[banners.length - 1], ...banners, banners[0]];

  return (
    <S.Root>
      <S.Track
        $animate={slider.withAnimation}
        style={{ "--x": `-${slider.index * 100}%` } as React.CSSProperties}
        onTransitionEnd={slider.onTransitionEnd}
        {...slider.swipeHandlers}
      >
        {slides.map((banner, i) => (
          <Slide key={`${banner.id}-${i}`} banner={banner} />
        ))}
      </S.Track>

      <Dots
        count={banners.length}
        active={slider.index - 1}
        onChange={(i) => slider.setIndex(i + 1)}
      />
    </S.Root>
  );
}
