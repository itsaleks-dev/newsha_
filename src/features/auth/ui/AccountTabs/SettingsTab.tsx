import { useAppDispatch } from "@/app/store/hooks";

import { logout } from "@/features/auth/model";

export function SettingsTab() {
  const dispatch = useAppDispatch();

  return <button onClick={() => dispatch(logout())}>Вийти з акаунту</button>;
}
