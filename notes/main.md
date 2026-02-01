import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

import { buildCatalogMenu, buildConditionMenu, buildNeedsMenu } from "@/features/catalog/lib";
import { Actions } from "./components/Actions";
import { HeaderNav } from "./components/Navigation";
import { BurgerButton } from "./components/BurgerButton";
import { LogoLink } from "./components/Logo/LogoLink";

import { PageContainer } from "@/shared/layout/PageContainer";

import { closeMegaMenu, selectMegaMenu } from "@/features/navigation/model";
import { MegaMenu } from "@/features/navigation/ui";
import { selectCategories } from "@/features/categories";

import { HeaderRoot, HeaderInner, HoverRoot } from "./Header.styled";

export function Header() {
const dispatch = useAppDispatch();
const active = useAppSelector(selectMegaMenu);
const categories = useAppSelector(selectCategories);

const catalogItems = buildCatalogMenu(categories);
const needsMenu = buildNeedsMenu(categories);
const conditionMenu = buildConditionMenu(categories);

const catalogCols = [catalogItems.slice(0, 5), catalogItems.slice(5, 10), catalogItems.slice(10)];

const menuMap = {
catalog: catalogCols,
needs: needsMenu,
condition: conditionMenu,
} as const;

const FORCE_OPEN = true;

const activeMenu =
active || FORCE_OPEN
? { variant: active ?? "catalog", data: menuMap[active ?? "catalog"] }
: null;

return (
<HeaderRoot>
<PageContainer>
<HoverRoot onMouseLeave={() => dispatch(closeMegaMenu())}>
<HeaderInner>
<BurgerButton />
<LogoLink />
<HeaderNav />
<Actions />
</HeaderInner>

          {activeMenu && (
            <MegaMenu
              variant={activeMenu.variant}
              data={activeMenu.data}
              onItemClick={() => dispatch(closeMegaMenu())}
            />
          )}
        </HoverRoot>
      </PageContainer>
    </HeaderRoot>

);
}
