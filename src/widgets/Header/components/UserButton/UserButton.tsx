import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

import { USER_ROLES } from "@/entities/user/types";

import {
  openLogin,
  selectIsAuthenticated,
  selectUserRole,
  selectUserName,
} from "@/features/auth/model";

import { IconButton } from "@/shared/ui/IconButton";
import { icons } from "@/shared/theme/variables";

import * as S from "./UserButton.styled";

export function UserButton() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isAuth = useAppSelector(selectIsAuthenticated);
  const role = useAppSelector(selectUserRole);
  const userName = useAppSelector(selectUserName);

  const handleClick = () => {
    if (!isAuth) {
      dispatch(openLogin());
      return;
    }

    navigate(role === USER_ROLES.ADMIN ? "/admin" : "/account");
  };

  const label = role === USER_ROLES.ADMIN ? "Admin" : (userName ?? "Мій кабінет");

  return (
    <S.Wrapper>
      {isAuth && (
        <S.TextButton type="button" onClick={handleClick}>
          <span>{label}</span>
        </S.TextButton>
      )}

      <IconButton
        ariaLabel={isAuth ? label : "Увійти"}
        onClick={handleClick}
        icon={<S.UserIcon src={icons.user.profile} alt="" />}
      />
    </S.Wrapper>
  );
}
