import { Formik, Form } from "formik";

import { FieldInput } from "@/shared/ui/Form/ui/FieldInput";
import { FieldError } from "@/shared/ui/Form/ui/FieldError";

import { CONTACTS_FORM_SCHEMA } from "@/pages/ContactsPage/config";
import type { ContactsFormValues } from "@/pages/ContactsPage/config";

import * as S from "./FormBlock.styled";

export function FormBlock() {
  const schema = CONTACTS_FORM_SCHEMA;

  return (
    <S.Section>
      {schema.title && <S.Title>{schema.title}</S.Title>}

      <Formik
        initialValues={schema.initialValues!}
        validationSchema={schema.validationSchema}
        onSubmit={(values) => {
          console.log("CONTACT FORM SUBMIT:", values);
        }}
      >
        {() => (
          <Form noValidate>
            <S.FormGrid>
              {schema.fields.map((field) => {
                const isTextarea = field.type === "textarea";

                const Wrapper = isTextarea ? S.FullWidth : "div";

                return (
                  <Wrapper key={field.name}>
                    <FieldInput
                      name={field.name}
                      type={isTextarea ? undefined : field.type}
                      placeholder={field.placeholder}
                    />
                    <FieldError<ContactsFormValues> name={field.name as keyof ContactsFormValues} />
                  </Wrapper>
                );
              })}

              <S.FullWidth>
                <button type="submit">{schema.submitLabel}</button>
              </S.FullWidth>
            </S.FormGrid>
          </Form>
        )}
      </Formik>
    </S.Section>
  );
}
