import { couponsDB } from "@/app/mocks/discount/db";

import { asMoney } from "@/shared/types/primitives";

export function seedCoupons() {
  couponsDB.push(
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
  );
}
