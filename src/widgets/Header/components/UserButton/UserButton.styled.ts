import styled from "styled-components";

import { Icon } from "@/shared/ui/IconButton";

import { flex, flexCenter } from "@/shared/theme/variables";

export const Wrapper = styled.div`
  display: none;

  @media ${({ theme }) => theme.media.tabletLg} {
    ${flex};
    align-items: center;
    gap: 10px;
  }
`;

export const Label = styled.button`
  padding: 0;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.small};
  letter-spacing: ${({ theme }) => theme.textMetrics.letterSpacing};
  background: none;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
`;

export const TextButton = styled.button`
  padding: 0;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.small};
  letter-spacing: ${({ theme }) => theme.textMetrics.letterSpacing};
  background: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export const UserIcon = styled(Icon)`
  display: none;

  @media ${({ theme }) => theme.media.tabletLg} {
    ${flexCenter};
    width: 24px;
    height: 24px;
    border: 0;
    background: none;
    cursor: pointer;
  }
`;
