import type { RootState } from "@/app/store/store";

export const selectAppStatus = (s: RootState) => s.app.status;
