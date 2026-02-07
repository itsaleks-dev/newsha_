import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

import { selectCategoriesStatus, fetchCategories } from "@/features/category/model";
import { CartModal } from "@/features/cart/ui/CartModal";

import { PageContainer } from "@/shared/layout/PageContainer";
import { useBreadcrumbs } from "../navigation/hooks";
import { JsonLd } from "../seo/components";

import { Header } from "@/widgets/Header/Header";
import { Footer } from "@/widgets/Footer";
import { Breadcrumbs } from "@/widgets/Breadcrumbs";

import { LayoutWrapper, Content } from "./AppLayout.styled";

export function AppLayout() {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectCategoriesStatus);
  const { breadcrumbs, schema } = useBreadcrumbs();

  useEffect(() => {
    if (status !== "idle") return;
    dispatch(fetchCategories());
  }, [status, dispatch]);

  return (
    <LayoutWrapper>
      <Content>
        <Header />
        <PageContainer>
          <JsonLd data={schema} />
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <Outlet />
        </PageContainer>
        <Footer />
      </Content>

      <CartModal />
    </LayoutWrapper>
  );
}
