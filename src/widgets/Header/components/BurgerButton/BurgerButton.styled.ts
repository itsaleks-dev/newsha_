import styled from "styled-components";

import { Icon } from "@/shared/ui/IconButton";

import { flexCenter } from "@/shared/theme/variables";

export const BurgerIcon = styled(Icon)`
  ${flexCenter};
  width: 24px;
  height: 24px;
  border: 0;
  background: none;
  cursor: pointer;

  @media ${({ theme }) => theme.media.tabletLg} {
    display: none;
  }
`;
