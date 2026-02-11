import styled from "styled-components";

export const CartHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const CartTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.black};
`;

export const CartSubtitle = styled.div`
  margin-top: 3px;
  font-size: 14px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.black};
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
