import { EMPTY_STATE_TEXT } from "./config";
import * as S from "./EmptyState.styled";

type Props = {
  title?: string;
  description?: string;
};

export function EmptyState({
  title = EMPTY_STATE_TEXT.title,
  description = EMPTY_STATE_TEXT.description,
}: Props) {
  return (
    <S.Wrapper role="status" aria-live="polite">
      <S.Title>{title}</S.Title>
      <S.Text>{description}</S.Text>
    </S.Wrapper>
  );
}
