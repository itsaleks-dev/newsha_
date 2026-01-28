import type { ID, Money, ISODate } from "@/entities/primitives";

export type DiscountType = "percent" | "fixed" | "free_shipping" | "category" | "product";

export type Coupon =
  | {
      code: string;
      type: "percent";
      percent: number;
      minOrderTotal?: Money;
      maxUses?: number;
      used: number;
      expiresAt?: ISODate;
    }
  | {
      code: string;
      type: "fixed";
      amount: Money;
      minOrderTotal?: Money;
      maxUses?: number;
      used: number;
      expiresAt?: ISODate;
    }
  | {
      code: string;
      type: "free_shipping";
      minOrderTotal?: Money;
      maxUses?: number;
      used: number;
      expiresAt?: ISODate;
    }
  | {
      code: string;
      type: "category";
      percent: number;
      categoryIds: readonly ID[];
      maxUses?: number;
      used: number;
      expiresAt?: ISODate;
    }
  | {
      code: string;
      type: "product";
      percent: number;
      productIds: readonly ID[];
      maxUses?: number;
      used: number;
      expiresAt?: ISODate;
    };
