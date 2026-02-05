import { CONTACTS_PAGE_TEXT } from "@/pages/ContactsPage/config";

import * as S from "./SocialBlock.styled";

export function SocialBlock() {
  const { social } = CONTACTS_PAGE_TEXT;

  return (
    <S.Section>
      <S.Title>{social.title}</S.Title>

      <S.List>
        {social.items.map(({ name, url }) => (
          <S.Item key={name}>
            <S.Link href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
              {name}
            </S.Link>
          </S.Item>
        ))}
      </S.List>
    </S.Section>
  );
}
