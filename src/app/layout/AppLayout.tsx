import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

import { selectCategoriesStatus, fetchCategories } from "@/features/category/model";

import { PageContainer } from "@/shared/layout/PageContainer";

import { LayoutWrapper, Content } from "./AppLayout.styled";

export function AppLayout() {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectCategoriesStatus);

  useEffect(() => {
    if (status !== "idle") return;
    dispatch(fetchCategories());
  }, [status, dispatch]);

  return (
    <LayoutWrapper>
      <Content>
        <PageContainer>
          <Outlet />
        </PageContainer>
      </Content>
    </LayoutWrapper>
  );
}
