import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "@/app/store/hooks";

import { logout } from "@/features/auth/model";

import * as S from "./AdminPage.styled";
import { ADMIN_PAGE_TEXT } from "./config";

export function AdminPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <>
      <S.Header>
        <S.HeaderTop>
          <div>
            <S.Title>{ADMIN_PAGE_TEXT.TITLE}</S.Title>
            <S.Subtitle>{ADMIN_PAGE_TEXT.SUBTITLE}</S.Subtitle>
          </div>

          <S.LogoutButton onClick={() => dispatch(logout())}>
            {ADMIN_PAGE_TEXT.LOGOUT}
          </S.LogoutButton>
        </S.HeaderTop>
      </S.Header>

      <S.Grid>
        <S.Card role="button" onClick={() => navigate("/admin/products")}>
          <h3>{ADMIN_PAGE_TEXT.PRODUCTS.TITLE}</h3>
          <p>{ADMIN_PAGE_TEXT.PRODUCTS.DESCRIPTION}</p>
        </S.Card>

        <S.Card>
          <h3>{ADMIN_PAGE_TEXT.ORDERS.TITLE}</h3>
          <p>{ADMIN_PAGE_TEXT.ORDERS.DESCRIPTION}</p>
        </S.Card>

        <S.Card>
          <h3>{ADMIN_PAGE_TEXT.USERS.TITLE}</h3>
          <p>{ADMIN_PAGE_TEXT.USERS.DESCRIPTION}</p>
        </S.Card>
      </S.Grid>
    </>
  );
}
