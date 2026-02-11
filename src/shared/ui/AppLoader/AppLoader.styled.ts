import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ $fullscreen?: boolean }>`
  ${({ $fullscreen }) =>
    $fullscreen
      ? css`
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: grid;
          place-items: center;
          background: ${({ theme }) => theme.colors.white};
          backdrop-filter: blur(14px) saturate(160%);
        `
      : css`
          min-height: 100vh;
          display: grid;
          place-items: center;
          background: ${({ theme }) => theme.colors.white};
        `}
`;

export const Text = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: ${({ theme }) => theme.textMetrics.letterSpacing};
  color: ${({ theme }) => theme.colors.gray};
`;
