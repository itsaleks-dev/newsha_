import type { UTM } from "@/app/analytics/types";

let cached: UTM | undefined;

export function saveUTMFromUrl() {
  const p = new URLSearchParams(location.search);

  const utm: UTM = {};

  const source = p.get("utm_source");
  if (source) utm.source = source;

  const medium = p.get("utm_medium");
  if (medium) utm.medium = medium;

  const campaign = p.get("utm_campaign");
  if (campaign) utm.campaign = campaign;

  if (Object.keys(utm).length) {
    localStorage.setItem("utm", JSON.stringify(utm));
  }
}

export function getUTM(): UTM {
  if (cached) return cached;

  const raw = localStorage.getItem("utm");
  cached = raw ? (JSON.parse(raw) as UTM) : {};
  return cached;
}
