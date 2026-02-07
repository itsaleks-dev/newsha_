import { PageContainer } from "@/shared/layout/PageContainer";

import { FOOTER_TEXT, FOOTER_COPYRIGHT } from "./config";

import * as S from "./Footer.styled";

export function Footer() {
  return (
    <S.Footer>
      <PageContainer>
        <S.Columns>
          {Object.values(FOOTER_TEXT).map((section) => (
            <S.Column key={section.TITLE}>
              <S.Title>{section.TITLE}</S.Title>

              <S.List>
                {section.LINKS.map((link) => (
                  <S.Item key={link.label}>
                    {link.href ? (
                      <S.Link href={link.href}>{link.label}</S.Link>
                    ) : (
                      <S.Text>{link.label}</S.Text>
                    )}
                  </S.Item>
                ))}
              </S.List>
            </S.Column>
          ))}
        </S.Columns>

        <S.Copyright>{FOOTER_COPYRIGHT}</S.Copyright>
      </PageContainer>
    </S.Footer>
  );
}
