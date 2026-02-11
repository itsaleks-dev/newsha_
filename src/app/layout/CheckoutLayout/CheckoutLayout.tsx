import { Outlet } from "react-router-dom";

import { CheckoutHeader } from "@/widgets/CheckoutHeader";
import { PageContainer } from "@/shared/layout";

import { LayoutWrapper, Content } from "./CheckoutLayout.styled";

export function CheckoutLayout() {
  return (
    <LayoutWrapper>
      <PageContainer>
        <CheckoutHeader />
        <Content>
          <Outlet />
        </Content>
      </PageContainer>
    </LayoutWrapper>
  );
}
