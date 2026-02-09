import { ProfileTab } from "@/features/auth/ui/Profile/Profile";

import { ACCOUNT_PAGE_TEXT } from "./config";
import * as S from "./AccountPage.styled";

export function AccountPage() {
  return (
    <>
      <S.Header>
        <S.Title>{ACCOUNT_PAGE_TEXT.TITLE}</S.Title>
      </S.Header>

      <S.Content>
        <ProfileTab />
      </S.Content>
    </>
  );
}
