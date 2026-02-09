import { Formik, Form } from "formik";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

import { registerForm } from "@/features/auth/forms";
import { register, selectAuthState } from "@/features/auth/model";
import { useRedirectAfterLogin } from "@/features/auth/hooks";
import type { RegisterDTO } from "@/features/auth/application";
import { REGISTER_FORM_TEXT } from "@/features/auth/config";

import { FieldInput } from "@/shared/ui/Form/ui/FieldInput";
import { FieldError } from "@/shared/ui/Form/ui/FieldError";
import { SubmitButton } from "@/shared/ui/Button/SubmitButton";

import { ErrorText, Divider } from "./RegisterForm.styled";

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
          await dispatch(
            register({
              name: values.name,
              phone: values.phone,
              email: values.email,
              password: values.password,
            }),
          ).unwrap();
        } finally {
          setSubmitting(false);
        }
      }}
    >
      <Form>
        <FieldInput name="name" />
        <FieldError name="name" />

        <FieldInput name="phone" />
        <FieldError name="phone" />

        <FieldInput name="email" type="email" />
        <FieldError name="email" />

        <FieldInput name="password" type="password" />
        <FieldError name="password" />

        <FieldInput name="password2" type="password" />
        <FieldError name="password2" />

        {error && <ErrorText>{error}</ErrorText>}

        <SubmitButton>
          {status === "loading" ? REGISTER_FORM_TEXT.SUBMIT_LOADING : registerForm.submitLabel}
        </SubmitButton>

        <Divider />
      </Form>
    </Formik>
  );
}
