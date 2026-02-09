import { useCallback } from "react";

import { useAppDispatch } from "@/app/store/hooks";

import { logout } from "@/features/auth/model";
import { HeaderProfile } from "@/features/auth/ui/Profile/HeaderProfile";
import { ProfileMenu } from "@/features/auth/ui/Profile/ProfileMenu/ProfileMenu";

type MenuKey = "orders" | "favorites" | "addresses" | "payments" | "logout";

export function ProfileTab() {
  const dispatch = useAppDispatch();

  const handleSelect = useCallback(
    (key: MenuKey) => {
      if (key === "logout") {
        dispatch(logout());
        return;
      }

      console.log("Profile menu action:", key);
    },
    [dispatch],
  );

  return (
    <>
      <HeaderProfile />
      <ProfileMenu onSelect={handleSelect} />
    </>
  );
}
