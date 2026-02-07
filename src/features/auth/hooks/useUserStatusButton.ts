import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

import { selectUserRole, selectIsAuthenticated, openLogin } from "@/features/auth/model";
import { getUserDashboardPath, getUserStatusLabel } from "@/features/auth/domain";

export function useUserStatusButton() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const role = useAppSelector(selectUserRole);
  const isAuth = useAppSelector(selectIsAuthenticated);

  const label = getUserStatusLabel(isAuth, role);

  const onClick = useCallback(() => {
    if (!isAuth) {
      dispatch(openLogin());
      return;
    }
    navigate(getUserDashboardPath(role));
  }, [dispatch, navigate, isAuth, role]);

  return { label, onClick };
}
