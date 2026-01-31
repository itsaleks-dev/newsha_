import { useCallback } from "react";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

import { login, selectAuthState } from "@/features/auth/model";
import { useRedirectAfterLogin } from "@/features/auth/hooks";
import type { LoginDTO } from "@/features/auth/application";

export function useLoginForm() {
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector(selectAuthState);
  const { redirect } = useRedirectAfterLogin();

  const onSubmit = useCallback(
    async (values: LoginDTO) => {
      await dispatch(login(values)).unwrap();
      redirect();
    },
    [dispatch, redirect],
  );

  return {
    status,
    error,
    onSubmit,
  };
}
