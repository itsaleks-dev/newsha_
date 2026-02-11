import styled from "styled-components";

import { flexLeft } from "@/shared/theme/variables";

export const Nav = styled.div`
  display: none;

  @media ${({ theme }) => theme.media.tabletLg} {
    ${flexLeft};
    gap: 20px;
  }
  @media ${({ theme }) => theme.media.desktop} {
    gap: 35px;
  }
`;

export const NavItem = styled.button`
  all: unset;
  font-size: ${({ theme }) => theme.fontSizes.caption};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.textMetrics.letterSpacing};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.6);
    outline-offset: 4px;
    border-radius: 4px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    font-size: ${({ theme }) => theme.fontSizes.bodySmall};
  }
`;
