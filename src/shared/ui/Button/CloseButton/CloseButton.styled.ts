import styled, { css } from "styled-components";

const sizes = {
  sm: css`
    width: 28px;
    height: 28px;
    font-size: 18px;
  `,
  md: css`
    width: 34px;
    height: 34px;
    font-size: 22px;
  `,
};

export const CloseRoot = styled.button<{ $size: keyof typeof sizes }>`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 50%;
  background: #f2f2f2;
  color: #242424;

  cursor: pointer;

  ${({ $size }) => sizes[$size]};
`;
