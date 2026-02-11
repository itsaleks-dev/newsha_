import styled from "styled-components";

import { headerGrid } from "@/shared/theme/variables";

export const Header = styled.header`
  height: 70px;
  padding: 0 16px;
  border-radius: 16px;
  ${headerGrid};
  background: ${({ theme }) => theme.colors.graphite};
`;

export const BackButton = styled.button`
  justify-self: start;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.small};
  background: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;
