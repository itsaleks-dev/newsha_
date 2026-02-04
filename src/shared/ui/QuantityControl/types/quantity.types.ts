import type React from "react";

export type QuantityControlProps = {
  value: number;
  valueRef?: React.RefObject<HTMLSpanElement | null>;
  min?: number;
  max?: number;
  onDecrease: () => void;
  onIncrease: () => void;
};
