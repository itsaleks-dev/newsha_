import { ERROR_STATE_TEXT } from "./config";
import * as S from "./ErrorState.styled";

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
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Text>{description}</S.Text>

      {onRetry && <S.ActionButton onClick={onRetry}>{ERROR_STATE_TEXT.retry}</S.ActionButton>}
    </S.Wrapper>
  );
}
