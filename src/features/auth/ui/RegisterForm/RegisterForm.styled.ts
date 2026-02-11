import styled from "styled-components";

import { flexColumn } from "@/shared/theme/variables";

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
