import { useNavigate } from "react-router-dom";

import { LogoLink } from "@/widgets/Header/components/LogoLink";

import * as S from "./CheckoutHeader.styled";

export function CheckoutHeader() {
  const navigate = useNavigate();

  return (
    <S.Header>
      <S.BackButton onClick={() => navigate(-1)}>← Назад</S.BackButton>
      <LogoLink />
      <div />
    </S.Header>
  );
}
