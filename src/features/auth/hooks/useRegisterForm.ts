import { useCallback } from "react";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

import { register, selectAuthState } from "@/features/auth/model";
import { useRedirectAfterLogin } from "@/features/auth/hooks";
import type { RegisterDTO } from "@/features/auth/application";

type FormValues = RegisterDTO & {
  password2: string;
};

export function useRegisterForm() {
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector(selectAuthState);
  const { redirect } = useRedirectAfterLogin();

  const onSubmit = useCallback(
    async (values: FormValues, helpers: { setSubmitting: (v: boolean) => void }) => {
      try {
        await dispatch(
          register({
            name: values.name,
            phone: values.phone,
            email: values.email,
            password: values.password,
          }),
        ).unwrap();

        redirect();
      } finally {
        helpers.setSubmitting(false);
      }
    },
    [dispatch, redirect],
  );

  return {
    status,
    error,
    onSubmit,
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      password2: "",
    },
  };
}
