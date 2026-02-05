import { NAV_PAGES } from "@/shared/config";

export type NavRoute = keyof typeof NAV_PAGES;

export function isNavRoute(path: string): path is NavRoute {
  return Object.prototype.hasOwnProperty.call(NAV_PAGES, path);
}
