import { FieldInput } from "@/shared/ui/Form/ui/FieldInput";
import { FieldError } from "@/shared/ui/Form/ui/FieldError";

import { CONTACT_SECTION_TEXT } from "./config";
import * as S from "./ContactSection.styled";

export function ContactSection() {
  return (
    <S.Section>
      <S.Title>{CONTACT_SECTION_TEXT.TITLE}</S.Title>

      <S.Fields>
        <S.Field>
          <S.Label htmlFor="name">{CONTACT_SECTION_TEXT.NAME.LABEL}</S.Label>
          <FieldInput name="name" placeholder={CONTACT_SECTION_TEXT.NAME.PLACEHOLDER} />
          <FieldError name="name" />
        </S.Field>

        <S.Field>
          <S.Label htmlFor="email">{CONTACT_SECTION_TEXT.EMAIL.LABEL}</S.Label>
          <FieldInput
            name="email"
            type="email"
            placeholder={CONTACT_SECTION_TEXT.EMAIL.PLACEHOLDER}
          />
          <FieldError name="email" />
        </S.Field>

        <S.Field>
          <S.Label htmlFor="phone">{CONTACT_SECTION_TEXT.PHONE.LABEL}</S.Label>
          <FieldInput
            name="phone"
            type="tel"
            placeholder={CONTACT_SECTION_TEXT.PHONE.PLACEHOLDER}
          />
          <FieldError name="phone" />
        </S.Field>
      </S.Fields>
    </S.Section>
  );
}
