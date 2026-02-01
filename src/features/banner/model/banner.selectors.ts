import type { RootState } from "@/app/store/store";
import type { BannerPlacement } from "@/features/banner/types";

export const selectBanners = (state: RootState) => state.banners.items;

export const selectBannersByPlacement = (placement: BannerPlacement) => (state: RootState) =>
  state.banners.items.filter((b) => b.placement === placement);

export const selectBannersStatus = (state: RootState) => state.banners.status;
export const selectBannersError = (state: RootState) => state.banners.error;
