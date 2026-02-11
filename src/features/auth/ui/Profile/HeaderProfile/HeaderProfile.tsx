import { useAppSelector } from "@/app/store/hooks";

import { selectAuthUser } from "@/features/auth/model";

import { HEADER_PROFILE_TEXT } from "./config";
import * as S from "./HeaderProfile.styled";

export function HeaderProfile() {
  const authUser = useAppSelector(selectAuthUser);

  if (!authUser || authUser.user.role === "guest") return null;

  const { name, email, avatar } = authUser.user;
  const initial = name?.charAt(0)?.toUpperCase() ?? HEADER_PROFILE_TEXT.AVATAR_FALLBACK;

  return (
    <S.Wrapper>
      <S.AvatarBlock>
        <S.Avatar>{avatar ? <img src={avatar} alt={name} /> : <span>{initial}</span>}</S.Avatar>

        <S.EditAvatarButton type="button" aria-label={HEADER_PROFILE_TEXT.EDIT_AVATAR_ARIA}>
          📷
        </S.EditAvatarButton>
      </S.AvatarBlock>

      <S.Info>
        <S.Name>{name}</S.Name>
        <S.Email>{email}</S.Email>
      </S.Info>

      <S.EditProfileButton type="button">
        {HEADER_PROFILE_TEXT.EDIT_PROFILE_BUTTON}
      </S.EditProfileButton>
    </S.Wrapper>
  );
}
