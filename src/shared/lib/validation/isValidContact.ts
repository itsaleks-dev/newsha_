import { emailRegex, phoneRegex, nameRegex } from "./regex";

export function isValidEmail(value: string): boolean {
  return emailRegex.test(value.trim());
}

export function isValidPhone(value: string): boolean {
  return phoneRegex.test(value.trim());
}

export function isValidName(value: string): boolean {
  return nameRegex.test(value.trim());
}
