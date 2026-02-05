import { CONTACTS_PAGE_TEXT } from "@/pages/ContactsPage/config";

import * as S from "./AdvantagesBlock.styled";

export function AdvantagesBlock() {
  const { advantages } = CONTACTS_PAGE_TEXT;

  return (
    <S.Section>
      <S.Title>{advantages.title}</S.Title>

      <S.Grid>
        <S.Column>
          <S.List>
            {advantages.client.map((item) => (
              <S.Item key={item}>{item}</S.Item>
            ))}
          </S.List>
        </S.Column>

        <S.Column>
          <S.List>
            {advantages.professional.map((item) => (
              <S.Item key={item}>{item}</S.Item>
            ))}
          </S.List>
        </S.Column>
      </S.Grid>
    </S.Section>
  );
}
