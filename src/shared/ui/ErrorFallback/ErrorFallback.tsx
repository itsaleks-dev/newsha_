import { ERROR_FALLBACK_TEXT } from "./config/ErrorFallback.text";
import * as S from "./ErrorFallback.styled";

export function ErrorFallback() {
  return (
    <S.Wrapper>
      <S.Title>{ERROR_FALLBACK_TEXT.title}</S.Title>
      <S.Text>{ERROR_FALLBACK_TEXT.description}</S.Text>
      <S.ReloadButton onClick={() => window.location.reload()}>
        {ERROR_FALLBACK_TEXT.button}
      </S.ReloadButton>
    </S.Wrapper>
  );
}
