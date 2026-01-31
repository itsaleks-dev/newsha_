import type { Coupon } from "@/entities/discount/types";

import { couponsDB } from "@/app/mocks/discount/db";

function findCoupon(code: string): Coupon | undefined {
  return couponsDB.find((x) => x.code === code.toUpperCase());
}

export const mockCouponApi = {
  validate(code: string): Coupon | null {
    const c = findCoupon(code);
    if (!c) return null;

    if (c.expiresAt && new Date(c.expiresAt) < new Date()) return null;
    if (c.maxUses && (c.used ?? 0) >= c.maxUses) return null;

    return c;
  },

  markUsed(code: string) {
    const c = findCoupon(code);
    if (!c) return;

    c.used = (c.used ?? 0) + 1;
  },
};
