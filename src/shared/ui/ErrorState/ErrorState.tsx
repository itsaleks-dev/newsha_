import { Wrapper, Title, Text, ActionButton } from "./ErrorState.styled";
import { ERROR_STATE_TEXT } from "./ErrorState.text";

type Props = {
  title?: string;
  description?: string;
  onRetry?: () => void;
};

export function ErrorState({
  title = ERROR_STATE_TEXT.title,
  description = ERROR_STATE_TEXT.description,
  onRetry,
}: Props) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Text>{description}</Text>

      {onRetry && <ActionButton onClick={onRetry}>{ERROR_STATE_TEXT.retry}</ActionButton>}
    </Wrapper>
  );
}
