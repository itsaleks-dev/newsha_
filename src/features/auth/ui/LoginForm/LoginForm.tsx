import { Formik, Form } from "formik";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { loginForm } from "@/features/auth/forms";
import { login, selectAuthState } from "@/features/auth/model";
import { useRedirectAfterLogin } from "@/features/auth/hooks";
import type { LoginDTO } from "@/features/auth/application";
import { LOGIN_FORM_TEXT } from "@/features/auth/config";

import { FieldInput } from "@/shared/ui/Form/ui/FieldInput";
import { SubmitButton } from "@/shared/ui/Button/SubmitButton";
import { LoginInput } from "@/shared/ui/Input";

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
        <S.FormWrapper>
          <FieldInput
            name="email"
            type="email"
            label={LOGIN_FORM_TEXT.EMAIL_LABEL}
            placeholder={LOGIN_FORM_TEXT.EMAIL_PLACEHOLDER}
            component={LoginInput}
          />

          <FieldInput
            name="password"
            type="password"
            label={LOGIN_FORM_TEXT.PASSWORD_LABEL}
            placeholder={LOGIN_FORM_TEXT.PASSWORD_LABEL}
            component={LoginInput}
          />

          {error && <S.FormError>{error}</S.FormError>}

          <S.ButtonRow>
            <SubmitButton>
              {status === "loading" ? LOGIN_FORM_TEXT.SUBMIT_LOADING : LOGIN_FORM_TEXT.SUBMIT}
            </SubmitButton>
          </S.ButtonRow>

          <S.Divider>{LOGIN_FORM_TEXT.DIVIDER}</S.Divider>

          <S.OAuthButton disabled>{LOGIN_FORM_TEXT.OAUTH_GOOGLE}</S.OAuthButton>

          <S.OAuthButton disabled>{LOGIN_FORM_TEXT.OAUTH_APPLE}</S.OAuthButton>
        </S.FormWrapper>
      </Form>
    </Formik>
  );
}
