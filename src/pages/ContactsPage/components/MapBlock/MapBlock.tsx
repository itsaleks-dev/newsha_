import * as S from "./MapBlock.styled";

export function MapBlock() {
  return (
    <S.Section>
      <S.Title>Ми на мапі</S.Title>

      <S.MapWrapper>
        <iframe
          title="Beauty Point location"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Київ,+бул.+Тараса+Шевченка,+35&output=embed"
        />
      </S.MapWrapper>
    </S.Section>
  );
}
