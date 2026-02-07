import { Wrapper, Text } from "./AppLoader.styled";
import { APP_TEXT } from "./config";

type Props = {
  text?: string;
  fullscreen?: boolean;
};

export function AppLoader({ text = APP_TEXT.LOADING, fullscreen }: Props) {
  return (
    <Wrapper {...(fullscreen !== undefined && { $fullscreen: fullscreen })}>
      <Text>{text}</Text>
    </Wrapper>
  );
}
