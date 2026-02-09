import { PROFILE_MENU_TEXT } from "./ProfileMenu.text";
import * as S from "./ProfileMenu.styled";

type MenuKey = "orders" | "favorites" | "addresses" | "payments" | "logout";

interface Props {
  onSelect: (key: MenuKey) => void;
}

export function ProfileMenu({ onSelect }: Props) {
  return (
    <S.List>
      <S.Item onClick={() => onSelect("orders")}>{PROFILE_MENU_TEXT.ORDERS}</S.Item>

      <S.Item onClick={() => onSelect("favorites")}>{PROFILE_MENU_TEXT.FAVORITES}</S.Item>

      <S.Item onClick={() => onSelect("addresses")}>{PROFILE_MENU_TEXT.ADDRESSES}</S.Item>

      <S.Item onClick={() => onSelect("payments")}>{PROFILE_MENU_TEXT.PAYMENTS}</S.Item>

      <S.LogoutItem onClick={() => onSelect("logout")}>{PROFILE_MENU_TEXT.LOGOUT}</S.LogoutItem>
    </S.List>
  );
}
