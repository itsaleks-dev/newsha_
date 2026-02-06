import { INSTAGRAM_TEXT as T } from "./config";
import * as S from "./InstagramBlock.styled";

export function InstagramBlock() {
  return (
    <S.Section>
      <S.Header>
        <S.Title>{T.TITLE}</S.Title>
        <S.Subtitle>{T.SUBTITLE}</S.Subtitle>
      </S.Header>

      <S.Grid>
        {T.IMAGES.map((src, i) => (
          <S.Card key={i}>
            <img src={src} alt="" />
          </S.Card>
        ))}
      </S.Grid>

      <S.Footer>
        <S.Button href={T.LINK} target="_blank">
          {T.BUTTON}
        </S.Button>
      </S.Footer>
    </S.Section>
  );
}
