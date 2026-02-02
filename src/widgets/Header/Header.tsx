import { PageContainer } from "@/shared/layout/PageContainer";
import { HeaderContainer, HeaderSection } from "./Header.styled";
import { BurgerButton } from "./components/BurgerButton";
import { Logo } from "./components/Logo/Logo";
import { CartButton } from "./components/CartButton/CartButton";
import { MobileSearch } from "@/features/search/ui/MobileSearch";

export function Header() {
  return (
    <HeaderContainer>
      <PageContainer>
        <HeaderSection>
          <BurgerButton />
          <Logo />
          <CartButton />
        </HeaderSection>

        <MobileSearch />
      </PageContainer>
    </HeaderContainer>
  );
}
