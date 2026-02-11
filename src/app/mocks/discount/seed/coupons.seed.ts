import { getCouponsDB, setCouponsDB } from "@/app/mocks/discount/db";

import { asMoney } from "@/shared/types";

export function seedCoupons() {
  const db = getCouponsDB();

  if (db.length) return;

  setCouponsDB([
    {
      code: "WELCOME10",
      type: "percent",
      percent: 10,
      used: 0,
    },
    {
      code: "SALE200",
      type: "fixed",
      amount: asMoney(200),
      minOrderTotal: asMoney(1000),
      used: 0,
    },
    {
      code: "FREESHIP",
      type: "free_shipping",
      used: 0,
    },
  ]);
}
