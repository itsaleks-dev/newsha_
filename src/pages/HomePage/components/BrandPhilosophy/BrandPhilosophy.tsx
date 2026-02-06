import { BRAND_PHILOSOPHY_TEXT } from "./config";
import * as S from "./BrandPhilosophy.styled";

export function BrandPhilosophy() {
  return (
    <S.Section>
      <S.Inner>
        <S.Title>{BRAND_PHILOSOPHY_TEXT.TITLE}</S.Title>

        <S.TextBlock>
          {BRAND_PHILOSOPHY_TEXT.INTRO.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </S.TextBlock>

        <S.Values>
          {BRAND_PHILOSOPHY_TEXT.VALUES.map((item) => (
            <S.Value key={item}>{item}</S.Value>
          ))}
        </S.Values>

        <S.TextBlock>
          <p>{BRAND_PHILOSOPHY_TEXT.QUALITY}</p>
        </S.TextBlock>

        <S.Closing>
          <S.ClosingTitle>{BRAND_PHILOSOPHY_TEXT.CLOSING.TITLE}</S.ClosingTitle>

          {BRAND_PHILOSOPHY_TEXT.CLOSING.TEXT.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </S.Closing>
      </S.Inner>
    </S.Section>
  );
}
