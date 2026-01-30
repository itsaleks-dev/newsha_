import styled, { css } from "styled-components";

const sizes = {
  sm: css`
    padding: 8px 14px;
    font-size: 12px;
  `,
  md: css`
    padding: 12px 18px;
    font-size: 13px;
  `,
  lg: css`
    padding: 16px 24px;
    font-size: 14px;
  `,
};

const variants = {
  primary: css`
    background: #111111;
    color: #ffffff;
    border: none;
  `,
  secondary: css`
    background: #f2f2f2;
    color: #111111;
    border: none;
  `,
  outline: css`
    background: transparent;
    color: #111111;
    border: 1px solid #111111;
  `,
  ghost: css`
    background: transparent;
    color: #111111;
    border: none;
  `,
  danger: css`
    background: #e53935;
    color: #ffffff;
    border: none;
  `,
  oauth: css`
    width: 100%;
    background: #ffffff;
    color: #111111;
    border: 1px solid #dddddd;
  `,
  nav: css`
    background: transparent;
    color: #111111;
    border: none;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    font-size: 12px;
  `,
};

export const ButtonRoot = styled.button<{
  $variant: keyof typeof variants;
  $size: keyof typeof sizes;
  $fullWidth: boolean;
  $loading?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  font-weight: 600;

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
