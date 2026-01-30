import { Wrapper, Title, Text, ReloadButton } from "./ErrorFallback.styled";
import { ERROR_FALLBACK_TEXT } from "./ErrorFallback.text";

export function ErrorFallback() {
  return (
    <Wrapper>
      <Title>{ERROR_FALLBACK_TEXT.title}</Title>
      <Text>{ERROR_FALLBACK_TEXT.description}</Text>
      <ReloadButton onClick={() => window.location.reload()}>
        {ERROR_FALLBACK_TEXT.button}
      </ReloadButton>
    </Wrapper>
  );
}
