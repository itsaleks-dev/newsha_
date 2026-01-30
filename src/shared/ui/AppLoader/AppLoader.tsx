import { Wrapper, Text } from "./AppLoader.styled";

type Props = {
  text?: string;
  fullscreen?: boolean;
};

export function AppLoader({ text = "NEWSHA завантаження...", fullscreen }: Props) {
  return (
    <Wrapper {...(fullscreen !== undefined && { $fullscreen: fullscreen })}>
      <Text>{text}</Text>
    </Wrapper>
  );
}
