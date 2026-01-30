import type React from "react";

export type QuantityControlProps = {
  value: number;
  valueRef?: React.Ref<HTMLSpanElement>;
  min?: number;
  max?: number;
  onDecrease: () => void;
  onIncrease: () => void;
};
