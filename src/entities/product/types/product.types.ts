import { ReviewStats } from "@/entities/review/types/review.types";
import { SEO } from "@/entities/seo/types/seo.types";
import type { Money, ID, Slug } from "@entities/primitives";

export type GalleryImage = {
  type: "image";
  url: string;
  alt?: string;
  isPrimary: boolean;
  lazy?: boolean;
};

export type GalleryVideo = {
  type: "video";
  url: string;
  urlPreview?: string;
  autoplay?: boolean;
  loop?: boolean;
};

export type ProductGallery = readonly (GalleryImage | GalleryVideo)[];

export type Product = {
  id: ID;
  code: string;
  name: string;
  nameEn: string;
  nameUa: string;
  slug: Slug;
  categoryId: ID;
  image?: string;
  gallery: ProductGallery;
  price?: Money;
  oldPrice?: Money;
  shortDescription: string;
  description: string;
  howToUse?: string;
  effects?: string;
  ingredients?: string;
  basePrice?: Money;
  baseOldPrice?: Money;
  volumes?: readonly ProductVolumeOption[];
  tags?: readonly string[];
  needs?: readonly string[];
  condition?: readonly string[];
  isNew?: boolean;
  isBestseller?: boolean;
  isTop?: boolean;
  isActive: boolean;
  reviewStats?: ReviewStats;
  seo?: SEO;
};

export type ProductVolumeOption = {
  value: ProductVolume;
  label: string;
  code?: string;
  price: Money;
  oldPrice: Money;
  inStock: boolean;
  stock?: number;
  unit?: "ml" | "g" | "pcs";
  image?: string;
  discountPercent?: number;
};

export enum ProductVolume {
  ML_1 = 1,
  ML_2 = 2,
  ML_10 = 10,
  ML_15 = 15,
  ML_20 = 20,
  ML_30 = 30,
  ML_50 = 50,
  ML_75 = 75,
  ML_80 = 80,
  ML_100 = 100,
  ML_125 = 125,
  ML_150 = 150,
  ML_200 = 200,
  ML_250 = 250,
  ML_300 = 300,
  ML_500 = 500,
  ML_1000 = 1000,
}

export type ProductPreview = {
  id: ID;
  slug: Slug;
  name: string;
  nameEn: string;
  nameUa: string;
  image?: string;
  price: Money;
  oldPrice?: Money;
  volumes?: readonly ProductVolumeOption[];
  rating?: number;
  reviewCount?: number;
  isNew?: boolean;
  isBestseller?: boolean;
  isTop?: boolean;
  categoryId: ID;
  tags?: readonly string[];
  needs?: readonly string[];
  condition?: readonly string[];
};

export type StoreProduct = Omit<
  Product,
  "gallery" | "volumes" | "tags" | "needs" | "condition" | "seo"
> & {
  gallery: (GalleryImage | GalleryVideo)[];
  volumes?: ProductVolumeOption[];
  tags?: string[];
  needs?: string[];
  condition?: string[];
  seo?: {
    title?: string;
    description?: string;
    ogImage?: string;
    keywords?: string[];
  };
};

export type StoreProductPreview = Omit<
  ProductPreview,
  "volumes" | "tags" | "needs" | "condition"
> & {
  volumes?: ProductVolumeOption[];
  tags?: string[];
  needs?: string[];
  condition?: string[];
};
