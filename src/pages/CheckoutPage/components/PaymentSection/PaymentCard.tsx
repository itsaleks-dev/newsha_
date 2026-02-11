import * as S from "./PaymentSection.styled";

interface Props {
  title: string;
  description: string;
  active?: boolean;
  onClick: () => void;
}

export function PaymentCard({ title, description, active, onClick }: Props) {
  return (
    <S.PaymentCard type="button" $active={!!active} onClick={onClick}>
      <S.CardHeader>
        <S.CardIcons>
          <span>VISA</span>
          <span>MC</span>
        </S.CardIcons>
      </S.CardHeader>

      <S.CardBody>
        <S.CardTitle>{title}</S.CardTitle>
        <S.CardDescription>{description}</S.CardDescription>
      </S.CardBody>
    </S.PaymentCard>
  );
}
