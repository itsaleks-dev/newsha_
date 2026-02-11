import { useAppDispatch } from "@/app/store/hooks";

import { openMegaMenu, closeMegaMenu } from "@/features/navigation/model";
import type { MegaMenuKey } from "@/features/navigation/model";

import { HEADER_MENU_TEXT } from "./config";
import * as S from "./HeaderMenu.styled";

export function HeaderMenu() {
  const dispatch = useAppDispatch();

  const handleOpen = (key: MegaMenuKey) => {
    dispatch(openMegaMenu(key));
  };

  return (
    <S.Nav onMouseLeave={() => dispatch(closeMegaMenu())}>
      <S.NavItem onMouseEnter={() => handleOpen("catalog")} onFocus={() => handleOpen("catalog")}>
        {HEADER_MENU_TEXT.CATALOG}
      </S.NavItem>

      <S.NavItem onMouseEnter={() => handleOpen("needs")} onFocus={() => handleOpen("needs")}>
        {HEADER_MENU_TEXT.NEEDS}
      </S.NavItem>

      <S.NavItem
        onMouseEnter={() => handleOpen("condition")}
        onFocus={() => handleOpen("condition")}
      >
        {HEADER_MENU_TEXT.HAIR_TYPE}
      </S.NavItem>
    </S.Nav>
  );
}
