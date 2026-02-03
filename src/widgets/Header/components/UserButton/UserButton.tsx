import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

import { openLogin } from "@/features/auth/model";

import { IconButton } from "@/shared/ui/IconButton";
import { icons } from "@/shared/theme/variables";

import { UserIcon } from "./UserButton.styled";

export function UserButton() {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((s) => Boolean(s.auth.user));

  if (isAuth) return null;

  return (
    <IconButton
      ariaLabel="Увійти"
      onClick={() => dispatch(openLogin())}
      icon={<UserIcon src={icons.user.profile} alt="" />}
    />
  );
}
