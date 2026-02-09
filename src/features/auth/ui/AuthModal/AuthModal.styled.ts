import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2000;

  background: rgba(0, 0, 0, 0.35);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBox = styled.div`
  position: fixed;
  top: 95px;
  width: calc(100vw - 20px);
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 24px 20px;
  border-radius: 16px;

  background: rgba(255, 255, 255, 0.95);
  color: ${({ theme }) => theme.colors.black};
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-align: center;
  text-transform: uppercase;
`;

export const SwitchLink = styled.button`
  margin-top: 10px;
  padding: 0;
  border: none;
  background: none;
  font-size: 12px;
  letter-spacing: 0.05em;
  color: #242424;

  cursor: pointer;
`;

export const CloseButton = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 999px;
  border: none;
  padding: 0;
  background: rgba(0, 0, 0, 0.75);
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  line-height: 1;

  cursor: pointer;
`;
