import type { ProductVolume, ProductVolumeOption } from "./product.types";

export type VolumeSelectorListProps = {
  volumes: readonly ProductVolumeOption[];
  selected: ProductVolume | null;
  onSelect: (value: ProductVolume) => void;
};
