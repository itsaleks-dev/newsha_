import styled from "styled-components";

import { flex, flexColumn } from "@/shared/theme/variables";

export const FormWrapper = styled.div`
  ${flexColumn};
  gap: 12px;
`;

export const FormError = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.caption};
  letter-spacing: ${({ theme }) => theme.textMetrics.letterSpacing};
  color: ${({ theme }) => theme.colors.error};
`;

export const ButtonRow = styled.div`
  margin-top: 20px;

  & > button {
    width: 100%;
    border-radius: 12px;
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    letter-spacing: ${({ theme }) => theme.textMetrics.letterSpacing};
    color: ${({ theme }) => theme.colors.graphite};
    background: ${({ theme }) => theme.colors.white};
  }
`;

export const Divider = styled.div`
  margin: 16px 0;
  ${flex};
  align-items: center;
  gap: 20px;
  font-size: ${({ theme }) => theme.fontSizes.caption};
  letter-spacing: ${({ theme }) => theme.textMetrics.letterSpacing};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.colors.white};
  }
`;

export const OAuthButton = styled.button`
  padding: 10px 12px;
  border-radius: 12px;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.small};
  letter-spacing: ${({ theme }) => theme.textMetrics.letterSpacing};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.graphite};
  cursor: pointer;

  &:disabled {
    cursor: default;
  }
`;
