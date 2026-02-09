import styled from "styled-components";

export const CartOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1800;
  background: rgba(0, 0, 0, 0.35);
`;

export const CartPanel = styled.div`
  position: fixed;
  top: 95px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100vw - 20px);
  max-height: calc(100dvh - 120px);
  z-index: 3000;
  display: flex;
  flex-direction: column;

  padding: 24px 20px 16px;
  border-radius: 16px;

  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(6px);
  box-shadow: 0 30px 120px rgba(0, 0, 0, 0.35);

  overflow: hidden;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 24px 40px 16px;
  }
`;

export const CartBody = styled.div`
  flex: 1;
  min-height: 80px;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
