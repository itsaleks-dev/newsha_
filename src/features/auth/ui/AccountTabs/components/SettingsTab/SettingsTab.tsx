import { useAppDispatch } from "@/app/store/hooks";

import { SETTINGS_TAB_TEXT } from "@/features/auth/ui/AccountTabs/config";
import { logout } from "@/features/auth/model";

export function SettingsTab() {
  const dispatch = useAppDispatch();

  return <button onClick={() => dispatch(logout())}>{SETTINGS_TAB_TEXT.LOGOUT}</button>;
}
