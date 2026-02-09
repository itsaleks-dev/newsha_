import { useAppSelector } from "@/app/store/hooks";

import { selectAuthUser } from "@/features/auth/model";

import * as S from "./ProfileTab.styled";

export function ProfileTab() {
  const user = useAppSelector(selectAuthUser);

  if (!user || user.user.role === "guest") return null;

  return (
    <S.Box>
      <S.Row>
        <span>Імʼя</span>
        <strong>{user.user.name}</strong>
      </S.Row>

      <S.Row>
        <span>Email</span>
        <strong>{user.user.email ?? "—"}</strong>
      </S.Row>
    </S.Box>
  );
}
