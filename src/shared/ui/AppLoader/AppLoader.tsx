import { APP_TEXT } from "./config";
import * as S from "./AppLoader.styled";

type Props = {
  text?: string;
  fullscreen?: boolean;
};

export function AppLoader({ text = APP_TEXT.LOADING, fullscreen }: Props) {
  return (
    <S.Wrapper {...(fullscreen !== undefined && { $fullscreen: fullscreen })}>
      <S.Text>{text}</S.Text>
    </S.Wrapper>
  );
}
