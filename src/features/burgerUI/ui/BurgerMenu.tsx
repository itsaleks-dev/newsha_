import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

import { selectIsAuthenticated } from "@/features/auth/model";
import { openLogin } from "@/features/auth/model";
import { useBurgerUI } from "@/features/burgerUI/hooks";
import {
  fetchCategories,
  selectCategories,
  selectCategoriesStatus,
} from "@/features/category/model";

import { BURGER_MENU_TEXT } from "./config";
import * as S from "./BurgerMenu.styled";

export function BurgerMenu() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { open, close } = useBurgerUI();
  const categories = useAppSelector(selectCategories);
  const status = useAppSelector(selectCategoriesStatus);
  const isAuth = useAppSelector(selectIsAuthenticated);

  useEffect(() => {
    if (open && status === "idle") {
      dispatch(fetchCategories());
    }
  }, [open, status, dispatch]);

  return (
    <S.Overlay $open={open} onClick={close}>
      <S.Panel $open={open} onClick={(e) => e.stopPropagation()}>
        <S.Title>{BURGER_MENU_TEXT.TITLE}</S.Title>

        <S.Content>
          <S.List>
            {categories
              .filter((c) => c.isActive && !c.parentId)
              .sort((a, b) => a.order - b.order)
              .map((category) => (
                <li key={category.id}>
                  <S.Item
                    onClick={() => {
                      navigate(`/catalog/${category.slug}`);
                      close();
                    }}
                  >
                    {category.name}
                  </S.Item>
                </li>
              ))}
          </S.List>
        </S.Content>

        <S.Account>
          <S.AccountItem
            onClick={() => {
              if (isAuth) {
                navigate("/account");
              } else {
                dispatch(openLogin());
              }
              close();
            }}
          >
            {BURGER_MENU_TEXT.ACCOUNT}
          </S.AccountItem>
        </S.Account>
      </S.Panel>
    </S.Overlay>
  );
}
