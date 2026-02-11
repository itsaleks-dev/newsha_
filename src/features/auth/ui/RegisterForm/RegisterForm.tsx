import { Formik, Form } from "formik";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

import { registerForm } from "@/features/auth/forms";
import { register, selectAuthState } from "@/features/auth/model";
import { useRedirectAfterLogin } from "@/features/auth/hooks";
import type { RegisterDTO } from "@/features/auth/application";
import { REGISTER_FORM_TEXT } from "@/features/auth/config";

import { FieldInput } from "@/shared/ui/Form/ui/FieldInput";
import { SubmitButton } from "@/shared/ui/Button/SubmitButton";
import { RegisterInput } from "@/shared/ui/Input";

import * as S from "./RegisterForm.styled";

export function RegisterForm() {
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector(selectAuthState);

  useRedirectAfterLogin();

  return (
    <Formik<RegisterDTO>
      initialValues={registerForm.initialValues}
      validationSchema={registerForm.validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await dispatch(register(values)).unwrap();
        } finally {
          setSubmitting(false);
        }
      }}
    >
      <Form>
        <S.FormWrapper>
          <FieldInput
            name="name"
            label={REGISTER_FORM_TEXT.NAME_LABEL}
            placeholder={REGISTER_FORM_TEXT.NAME_PLACEHOLDER}
            component={RegisterInput}
          />

          <FieldInput
            name="phone"
            label={REGISTER_FORM_TEXT.PHONE_LABEL}
            placeholder={REGISTER_FORM_TEXT.PHONE_PLACEHOLDER}
            component={RegisterInput}
          />

          <FieldInput
            name="email"
            type="email"
            label={REGISTER_FORM_TEXT.EMAIL_LABEL}
            placeholder={REGISTER_FORM_TEXT.EMAIL_PLACEHOLDER}
            component={RegisterInput}
          />

          <FieldInput
            name="password"
            type="password"
            label={REGISTER_FORM_TEXT.PASSWORD_LABEL}
            placeholder={REGISTER_FORM_TEXT.PASSWORD_PLACEHOLDER}
            component={RegisterInput}
          />

          <FieldInput
            name="password2"
            type="password"
            label={REGISTER_FORM_TEXT.PASSWORD2_LABEL}
            placeholder={REGISTER_FORM_TEXT.PASSWORD2_PLACEHOLDER}
            component={RegisterInput}
          />

          {error && <S.FormError>{error}</S.FormError>}

          <S.ButtonRow>
            <SubmitButton>
              {status === "loading" ? REGISTER_FORM_TEXT.SUBMIT_LOADING : REGISTER_FORM_TEXT.SUBMIT}
            </SubmitButton>
          </S.ButtonRow>
        </S.FormWrapper>
      </Form>
    </Formik>
  );
}
