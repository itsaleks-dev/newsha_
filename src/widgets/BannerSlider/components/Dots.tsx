import * as S from "../BannerSlider.styled";

type Props = {
  count: number;
  active: number;
  onChange: (index: number) => void;
};

export function Dots({ count, active, onChange }: Props) {
  return (
    <S.Dots>
      {Array.from({ length: count }).map((_, i) => (
        <S.Dot key={i} $active={i === active} onClick={() => onChange(i)} />
      ))}
    </S.Dots>
  );
}
