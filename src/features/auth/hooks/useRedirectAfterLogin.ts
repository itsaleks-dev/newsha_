import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { useAppDispatch } from "@/app/store/hooks";

import { closeAuthModal } from "@/features/auth/model";

import { ROUTES } from "@/shared/config";

export function useRedirectAfterLogin(defaultPath = ROUTES.ACCOUNT) {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const redirect = useCallback(() => {
    dispatch(closeAuthModal());

    const from = location.state?.from?.pathname;

    if (from) {
      navigate(from, { replace: true });
      return;
    }

    navigate(defaultPath, { replace: true });
  }, [dispatch, location.state, navigate, defaultPath]);

  return { redirect };
}
