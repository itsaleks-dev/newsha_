import type { QuantityControlProps } from "@/shared/ui/QuantityControl/types";

import * as S from "./QuantityControl.styled";

export function QuantityControl({
  value,
  valueRef,
  min = 1,
  max,
  onDecrease,
  onIncrease,
}: QuantityControlProps) {
  const isMin = value <= min;
  const isMax = max != null && value >= max;

  return (
    <S.QuantityWrapper>
      <S.QtyControlButton onClick={onDecrease} disabled={isMin}>
        −
      </S.QtyControlButton>

      <S.QtyValue ref={valueRef}>{value}</S.QtyValue>

      <S.QtyControlButton onClick={onIncrease} disabled={isMax}>
        +
      </S.QtyControlButton>
    </S.QuantityWrapper>
  );
}
