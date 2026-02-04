import styled from "styled-components";

export const QuantityWrapper = styled.div`
  height: 42px;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 8px;
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.black};
  z-index: 2;
`;

export const QtyControlButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.white};
  color: #000;
  cursor: pointer;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 2px 6px ${({ theme }) => theme.colors.black};
  }

  &:disabled {
    opacity: 0.4;
  }
`;

export const QtyValue = styled.span`
  min-width: 18px;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-align: center;
  transition: transform 0.2s ease;

  &.bump {
    transform: scale(1.25);
  }
`;
