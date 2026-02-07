import { PageContainer } from "@/shared/layout/PageContainer";

import { MobileSearch } from "@/features/search/ui/MobileSearch";
import { BurgerMenu } from "@/features/burgerUI/ui/BurgerMenu";

import { BurgerButton } from "./components/BurgerButton";
import { HeaderMenu } from "./components/HeaderMenu";
import { LogoLink } from "./components/LogoLink";
import { ActionsHeader } from "./components/ActionsHeader";

import { HeaderContainer, HeaderSection, Left, Center, Right } from "./Header.styled";

export function Header() {
  return (
    <>
      <HeaderContainer>
        <PageContainer>
          <HeaderSection>
            <Left>
              <HeaderMenu />
              <BurgerButton />
            </Left>

            <Center>
              <LogoLink />
            </Center>

            <Right>
              <ActionsHeader />
            </Right>
          </HeaderSection>

          <MobileSearch />
        </PageContainer>
      </HeaderContainer>

      <BurgerMenu />
    </>
  );
}
