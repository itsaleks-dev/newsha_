export const ENV = {
  APP_NAME: "Newsha Shop",
  API_URL: import.meta.env.VITE_API_URL || "/api",
  MODE: import.meta.env.MODE,
  IS_DEV: import.meta.env.DEV,
  IS_PROD: import.meta.env.PROD,
} as const;
