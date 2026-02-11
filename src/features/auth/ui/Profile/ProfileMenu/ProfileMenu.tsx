import type { ProfileMenuKey } from "./config";
import { PROFILE_MENU } from "./config";
import * as S from "./ProfileMenu.styled";

interface Props {
  onSelect: (key: ProfileMenuKey) => void;
}

export function ProfileMenu({ onSelect }: Props) {
  return (
    <S.List>
      {PROFILE_MENU.map(({ key, label, danger }) =>
        danger ? (
          <S.LogoutItem key={key} onClick={() => onSelect(key)}>
            {label}
          </S.LogoutItem>
        ) : (
          <S.Item key={key} onClick={() => onSelect(key)}>
            {label}
          </S.Item>
        ),
      )}
    </S.List>
  );
}
