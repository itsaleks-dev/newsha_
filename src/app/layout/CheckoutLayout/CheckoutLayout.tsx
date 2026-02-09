import { Outlet } from "react-router-dom";

import { CheckoutHeader } from "@/widgets/CheckoutHeader";

import { LayoutWrapper, Content } from "./CheckoutLayout.styled";

export function CheckoutLayout() {
  return (
    <LayoutWrapper>
      <CheckoutHeader />
      <Content>
        <Outlet />
      </Content>
    </LayoutWrapper>
  );
}
