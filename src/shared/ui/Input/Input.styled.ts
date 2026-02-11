import styled from "styled-components";

import { flexColumn } from "@/shared/theme/variables";

export const InputField = styled.div<{ $hasError: boolean }>`
  ${flexColumn};
  gap: 6px;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.caption};
  letter-spacing: ${({ theme }) => theme.textMetrics.letterSpacing};
  color: ${({ theme }) => theme.colors.white};
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 14px;
  border-radius: 12px;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.small};
  letter-spacing: ${({ theme }) => theme.textMetrics.letterSpacing};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};

  &::placeholder {
    color: ${({ theme }) => theme.colors.graphite};
    opacity: 0.6;
  }

  &:focus {
    outline: none;
  }
`;

export const InputError = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.caption};
  letter-spacing: ${({ theme }) => theme.textMetrics.letterSpacing};
  color: ${({ theme }) => theme.colors.error};
`;
