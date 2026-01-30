import { EMPTY_STATE_TEXT } from "./EmptyState.text";

import { Wrapper, Title, Text } from "./EmptyState.styled";

type Props = {
  title?: string;
  description?: string;
};

export function EmptyState({
  title = EMPTY_STATE_TEXT.title,
  description = EMPTY_STATE_TEXT.description,
}: Props) {
  return (
    <Wrapper role="status" aria-live="polite">
      <Title>{title}</Title>
      <Text>{description}</Text>
    </Wrapper>
  );
}
