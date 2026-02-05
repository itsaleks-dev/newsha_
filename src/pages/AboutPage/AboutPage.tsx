import * as S from "./AboutPage.styled";
import { ABOUT_PAGE_TEXT } from "@/pages/AboutPage/config";

export function AboutPage() {
  const {
    hero,
    introduction,
    brandFeatures,
    marketAdvantages,
    philosophy,
    assortment,
    innovationAndQuality,
    closing,
  } = ABOUT_PAGE_TEXT;

  return (
    <S.Page>
      <S.Section>
        <S.Title>{hero.title}</S.Title>
        <S.Subtitle>{hero.subtitle}</S.Subtitle>
      </S.Section>

      <S.Section>
        {introduction.map((text) => (
          <S.Text key={text}>{text}</S.Text>
        ))}
      </S.Section>

      <S.Section>
        <S.List>
          {brandFeatures.map((item) => (
            <S.ListItem key={item}>{item}</S.ListItem>
          ))}
        </S.List>
      </S.Section>

      <S.Section>
        <S.Title as="h2">{marketAdvantages.title}</S.Title>

        <S.Grid>
          {marketAdvantages.items.map((item) => (
            <S.Card key={item}>
              <S.CardText>{item}</S.CardText>
            </S.Card>
          ))}
        </S.Grid>
      </S.Section>

      <S.Section>
        <S.Title as="h2">{philosophy.title}</S.Title>
        {philosophy.text.map((text) => (
          <S.Text key={text}>{text}</S.Text>
        ))}
      </S.Section>

      <S.Section>
        <S.Title as="h2">{assortment.title}</S.Title>
        {assortment.text.map((text) => (
          <S.Text key={text}>{text}</S.Text>
        ))}
      </S.Section>

      <S.Section>
        <S.Title as="h2">{innovationAndQuality.title}</S.Title>
        {innovationAndQuality.text.map((text) => (
          <S.Text key={text}>{text}</S.Text>
        ))}
      </S.Section>

      <S.Section>
        <S.Title as="h2">{closing.title}</S.Title>
        {closing.text.map((text) => (
          <S.Text key={text}>{text}</S.Text>
        ))}
      </S.Section>
    </S.Page>
  );
}

export default AboutPage;
