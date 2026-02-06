import { HAIR_CONCERNS_TEXT } from "./config";
import * as S from "./HairConcerns.styled";

export function HairConcerns() {
  return (
    <S.Section>
      <S.Title>{HAIR_CONCERNS_TEXT.TITLE}</S.Title>

      <S.List>
        {HAIR_CONCERNS_TEXT.ITEMS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </S.List>

      <S.Text>
        {HAIR_CONCERNS_TEXT.PARAGRAPHS.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </S.Text>

      <S.Hint>{HAIR_CONCERNS_TEXT.CTA_HINT}</S.Hint>
    </S.Section>
  );
}
