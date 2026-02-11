import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

import { USER_ROLES } from "@/entities/user/types";

import { selectIsAuthenticated, selectUserRole, closeAuthModal } from "@/features/auth/model";

import { ROUTES } from "@/shared/config";

export function useRedirectAfterLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const isAuth = useAppSelector(selectIsAuthenticated);
  const role = useAppSelector(selectUserRole);

  useEffect(() => {
    if (!isAuth) return;

    dispatch(closeAuthModal());

    const from = location.state?.from?.pathname;
    if (from) {
      navigate(from, { replace: true });
      return;
    }

    navigate(role === USER_ROLES.ADMIN ? ROUTES.ADMIN : ROUTES.ACCOUNT, { replace: true });
  }, [isAuth, role, location.state, navigate, dispatch]);
}
