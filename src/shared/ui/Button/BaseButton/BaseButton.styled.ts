import styled, { css } from "styled-components";

import { flexCenter } from "@/shared/theme/variables";

const sizes = {
  sm: css`
    padding: 8px 14px;
    font-size: ${({ theme }) => theme.fontSizes.captionSmall};
  `,
  md: css`
    padding: 12px 18px;
    font-size: ${({ theme }) => theme.fontSizes.caption};
  `,
  lg: css`
    padding: 16px 24px;
    font-size: ${({ theme }) => theme.fontSizes.small};
  `,
};

const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.graphite};
    color: ${({ theme }) => theme.colors.white};
    border: none;
  `,
  secondary: css`
    background: #f2f2f2;
    color: ${({ theme }) => theme.colors.graphite};
    border: none;
  `,
  outline: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.graphite};
    border: 1px solid ${({ theme }) => theme.colors.graphite};
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.graphite};
    border: none;
  `,
  danger: css`
    background: #e53935;
    color: ${({ theme }) => theme.colors.white};
    border: none;
  `,
  oauth: css`
    width: 100%;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.graphite};
    border: 1px solid #dddddd;
  `,
  nav: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.graphite};
    border: none;
    letter-spacing: ${({ theme }) => theme.textMetrics.letterSpacing};
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSizes.caption};
  `,
};

export const ButtonRoot = styled.button<{
  $variant: keyof typeof variants;
  $size: keyof typeof sizes;
  $fullWidth: boolean;
  $loading?: boolean;
}>`
  ${flexCenter};
  border-radius: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};

  cursor: ${({ $loading }) => ($loading ? "not-allowed" : "pointer")};
  opacity: ${({ $loading }) => ($loading ? 0.6 : 1)};
  pointer-events: ${({ $loading }) => ($loading ? "none" : "auto")};

  ${({ $size }) => sizes[$size]};
  ${({ $variant }) => variants[$variant]};

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}
`;
