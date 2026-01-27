import type { ReactNode } from "react";

import { PageContainer as StyledPageContainer } from "./PageContainer.styled";

type Props = {
  children: ReactNode;
};

export function PageContainer({ children }: Props) {
  return <StyledPageContainer>{children}</StyledPageContainer>;
}
