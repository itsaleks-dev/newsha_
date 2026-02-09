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
  position: relative;
  width: calc(100vw - 24px);
  max-width: 420px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 24px 20px;
  border-radius: 16px;

  background: rgba(255, 255, 255, 0.95);
  color: ${({ theme }) => theme.colors.black};
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-align: center;
  text-transform: uppercase;
`;

export const SwitchLink = styled.button`
  margin-top: 8px;
  padding: 0;

  border: none;
  background: none;

  font-size: 14px;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.black};

  cursor: pointer;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;

  width: 28px;
  height: 28px;
  padding: 0;

  border: none;
  border-radius: 999px;

  background: rgba(0, 0, 0, 0.75);
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  line-height: 1;

  cursor: pointer;
`;
