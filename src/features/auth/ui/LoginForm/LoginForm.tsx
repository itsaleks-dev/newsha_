import { Formik, Form } from "formik";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

import { loginForm } from "@/features/auth/forms";
import { login, selectAuthState } from "@/features/auth/model";
import { useRedirectAfterLogin } from "@/features/auth/hooks";
import type { LoginDTO } from "@/features/auth/application";
import { LOGIN_FORM_TEXT } from "@/features/auth/config";

import { FieldInput } from "@/shared/ui/Form/ui/FieldInput";
import { FieldError } from "@/shared/ui/Form/ui/FieldError";
import { SubmitButton } from "@/shared/ui/Button/SubmitButton";

import * as S from "./LoginForm.styled";

export function LoginForm() {
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector(selectAuthState);

  useRedirectAfterLogin();

  return (
    <Formik<LoginDTO>
      initialValues={loginForm.initialValues}
      validationSchema={loginForm.validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await dispatch(login(values)).unwrap();
        } finally {
          setSubmitting(false);
        }
      }}
    >
      <Form>
        <FieldInput name="email" type="email" placeholder={loginForm.fields[0].placeholder} />
        <FieldError name="email" />

        <FieldInput name="password" type="password" />
        <FieldError name="password" />

        {error && <S.ErrorText>{error}</S.ErrorText>}

        <S.ButtonRow>
          <SubmitButton>
            {status === "loading" ? LOGIN_FORM_TEXT.SUBMIT_LOADING : loginForm.submitLabel}
          </SubmitButton>
        </S.ButtonRow>

        <S.Divider>{LOGIN_FORM_TEXT.DIVIDER}</S.Divider>

        <S.OAuthButton type="button" disabled>
          <img src="/icons/google.svg" alt="" />
          {LOGIN_FORM_TEXT.OAUTH_GOOGLE}
        </S.OAuthButton>

        <S.OAuthButton type="button" disabled>
          <img src="/icons/apple.svg" alt="" />
          {LOGIN_FORM_TEXT.OAUTH_APPLE}
        </S.OAuthButton>
      </Form>
    </Formik>
  );
}
