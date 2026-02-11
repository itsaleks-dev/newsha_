import type { VolumeSelectorListProps } from "@/entities/product/types";

import * as S from "./VolumeSelectorList.styled";

export function VolumeSelectorList({ volumes, selected, onSelect }: VolumeSelectorListProps) {
  return (
    <S.VolumeSelector>
      {volumes.map((v) => (
        <S.VolumeOption
          key={v.value}
          type="button"
          $active={v.value === selected}
          onClick={() => onSelect(v.value)}
        >
          {v.label ?? `${v.value} мл`}
        </S.VolumeOption>
      ))}
    </S.VolumeSelector>
  );
}
