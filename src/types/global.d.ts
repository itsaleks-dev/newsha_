export {};

declare global {
  interface Window {
    gtag?: (event: "event", action: string, params?: Record<string, unknown>) => void;
    fbq?: (event: "track", action: string, params?: Record<string, unknown>) => void;
  }
}
