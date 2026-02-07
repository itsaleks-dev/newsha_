import type { Coupon } from "@/entities/discount/types";

import { getCouponsDB, setCouponsDB } from "@/app/mocks/discount/db";

function findCoupon(code: string): Coupon | undefined {
  return getCouponsDB().find((c) => c.code === code.toUpperCase());
}

export const mockCouponApi = {
  validate(code: string): Coupon | null {
    const coupon = findCoupon(code);
    if (!coupon) return null;

    if (coupon.expiresAt && Date.parse(coupon.expiresAt) < Date.now()) {
      return null;
    }

    if (coupon.maxUses !== undefined && coupon.used >= coupon.maxUses) {
      return null;
    }

    return coupon;
  },

  markUsed(code: string) {
    const db = getCouponsDB();
    const index = db.findIndex((c) => c.code === code.toUpperCase());

    if (index === -1) return;

    const next = [...db];
    next[index] = {
      ...next[index],
      used: next[index].used + 1,
    };

    setCouponsDB(next);
  },
};
