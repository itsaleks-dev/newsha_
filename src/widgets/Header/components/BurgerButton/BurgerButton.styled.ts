import styled from "styled-components";
import { Icon } from "@/shared/ui/IconButton";

export const BurgerIcon = styled(Icon)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: 0;
  background: none;
  cursor: pointer;

  @media ${({ theme }) => theme.media.tabletLg} {
    display: none;
  }
`;
