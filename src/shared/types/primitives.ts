declare const __brand: unique symbol;

export type Brand<T, TBrand extends string> = T & {
  readonly [__brand]: TBrand;
};

export type ID = Brand<string, "ID">;
export type Slug = Brand<string, "Slug">;
export type ISODate = Brand<string, "ISODate">;
export type Money = Brand<number, "Money">;
export type Quantity = Brand<number, "Quantity">;
export type Subtotal = Brand<number, "Subtotal">;
export type AuthToken = Brand<string, "AuthToken">;

export function asID(value: string): ID {
  if (!value) throw new Error("ID must be a non-empty string");
  return value as ID;
}

export function asSlug(value: string): Slug {
  if (!value) throw new Error("Slug must be a non-empty string");
  return value as Slug;
}

export function asISODate(value: string): ISODate {
  if (!Number.isNaN(Date.parse(value))) return value as ISODate;
  throw new Error("Invalid ISO date");
}

export function asMoney(value: number): Money {
  if (!Number.isInteger(value) || value < 0) {
    throw new Error("Money must be a non-negative integer (cents)");
  }
  return value as Money;
}

export function asQuantity(value: number): Quantity {
  if (!Number.isInteger(value) || value < 0) {
    throw new Error("Quantity must be a non-negative integer");
  }
  return value as Quantity;
}

export function floorMoney(value: number): Money {
  if (!Number.isFinite(value) || value < 0) {
    throw new Error("Money value must be a finite non-negative number");
  }
  return asMoney(Math.floor(value));
}

export function calcSubtotal(price: Money, qty: Quantity): Subtotal {
  const v = (price as number) * (qty as number);

  if (!Number.isInteger(v) || v < 0) {
    throw new Error("Subtotal must be a non-negative integer");
  }

  return v as Subtotal;
}

export function applyPercentDiscount(price: Money, percent: number): Money {
  if (!Number.isFinite(percent) || percent < 0 || percent > 100) {
    throw new Error("Percent must be between 0 and 100");
  }

  const raw = (price as number) * (1 - percent / 100);
  return floorMoney(raw);
}

export function asAuthToken(value: string): AuthToken {
  if (!value) throw new Error("Invalid auth token");
  return value as AuthToken;
}
