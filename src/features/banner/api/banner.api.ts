import type { Banner, BannerPlacement } from "@/features/banner/types";

export async function fetchBanners(placement?: BannerPlacement): Promise<Banner[]> {
  const url = placement ? `/api/banners?placement=${placement}` : "/api/banners";
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to load banners");
  }

  return res.json();
}
