export default CooperationPage;
import * as S from "./CooperationPage.styled";
import { COOPERATION_PAGE_TEXT } from "@/pages/CooperationPage/config";

export function CooperationPage() {
  const { hero, intro, partnershipValue, benefits, outro } = COOPERATION_PAGE_TEXT;

  return (
    <S.Page>
      <S.Section>
        <S.Title>{hero.title}</S.Title>
        <S.Subtitle>{hero.subtitle}</S.Subtitle>
      </S.Section>

      <S.Section>
        {intro.map((text) => (
          <S.Text key={text}>{text}</S.Text>
        ))}
      </S.Section>

      <S.Section>
        <S.Title as="h2">{partnershipValue.title}</S.Title>
        <S.List>
          {partnershipValue.items.map((item) => (
            <S.ListItem key={item}>{item}</S.ListItem>
          ))}
        </S.List>
      </S.Section>

      <S.Section>
        <S.Title as="h2">{benefits.title}</S.Title>

        <S.Grid>
          {benefits.items.map((benefit) => (
            <S.Card key={benefit.title}>
              <S.CardTitle>{benefit.title}</S.CardTitle>

              {benefit.description?.map((text) => (
                <S.CardText key={text}>{text}</S.CardText>
              ))}

              {"list" in benefit && (
                <S.List>
                  {benefit.list.map((item) => (
                    <S.ListItem key={item}>{item}</S.ListItem>
                  ))}
                </S.List>
              )}

              {"note" in benefit && <S.Note>{benefit.note}</S.Note>}
            </S.Card>
          ))}
        </S.Grid>
      </S.Section>

      <S.Section>
        <S.Title as="h2">{outro.title}</S.Title>
        {outro.text.map((text) => (
          <S.Text key={text}>{text}</S.Text>
        ))}
      </S.Section>
    </S.Page>
  );
}
