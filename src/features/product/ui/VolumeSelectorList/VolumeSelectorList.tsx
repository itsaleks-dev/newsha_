import type { VolumeSelectorListProps } from "@/entities/product/types";

import { VolumeSelector, VolumeOption } from "./VolumeSelectorList.styled";

export function VolumeSelectorList({ volumes, selected, onSelect }: VolumeSelectorListProps) {
  return (
    <VolumeSelector>
      {volumes.map((v) => (
        <VolumeOption
          key={v.value}
          type="button"
          $active={v.value === selected}
          onClick={() => onSelect(v.value)}
        >
          {v.label ?? `${v.value} мл`}
        </VolumeOption>
      ))}
    </VolumeSelector>
  );
}
