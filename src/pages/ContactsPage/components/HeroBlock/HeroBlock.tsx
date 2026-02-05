import { CONTACTS_PAGE_TEXT } from "@/pages/ContactsPage/config";

import * as S from "./HeroBlock.styled";

export function HeroBlock() {
  const { title, subtitle } = CONTACTS_PAGE_TEXT.hero;

  return (
    <S.Section>
      <S.Content>
        <S.Title>{title}</S.Title>
        {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
      </S.Content>
    </S.Section>
  );
}
