import type { QuantityControlProps } from "@/shared/ui/QuantityControl/types";

import { QuantityWrapper, QtyControlButton, QtyValue } from "./QuantityControl.styled";

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
    <QuantityWrapper>
      <QtyControlButton onClick={onDecrease} disabled={isMin}>
        −
      </QtyControlButton>

      <QtyValue ref={valueRef}>{value}</QtyValue>

      <QtyControlButton onClick={onIncrease} disabled={isMax}>
        +
      </QtyControlButton>
    </QuantityWrapper>
  );
}
