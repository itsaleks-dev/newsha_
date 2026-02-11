import styled, { css } from "styled-components";

import { flexCenter } from "@/shared/theme/variables";

const sizes = {
  sm: css`
    width: 24px;
    height: 24px;
    font-size: ${({ theme }) => theme.fontSizes.bodyLarge};
  `,
  md: css`
    width: 32px;
    height: 32px;
    font-size: ${({ theme }) => theme.fontSizes.subtitle};
  `,
};

export const CloseRoot = styled.button<{ $size: keyof typeof sizes }>`
  ${flexCenter};
  border: none;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.graphite};

  cursor: pointer;

  ${({ $size }) => sizes[$size]};
`;
