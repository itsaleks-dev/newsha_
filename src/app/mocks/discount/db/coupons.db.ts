import type { Coupon } from "@/entities/discount/types";

const STORAGE_KEY = "newsha_coupons";

function load(): Coupon[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function save(db: Coupon[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
}

let couponsDB: Coupon[] = load();

export function getCouponsDB(): Coupon[] {
  return couponsDB;
}

export function setCouponsDB(next: Coupon[]) {
  couponsDB = next;
  save(couponsDB);
}
