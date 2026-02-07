import styled from "styled-components";

export const CartFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`;

export const FooterLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ClearCartButton = styled.button`
  padding: 0;
  border: none;
  font-size: 14px;
  letter-spacing: 0.05em;
  color: red;
  cursor: pointer;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const SummaryLabel = styled.span`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.black};
`;

export const SummaryValue = styled.span`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.black};
`;

export const CheckoutButton = styled.button`
  margin-top: 10px;
  height: 44px;
  border: none;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  letter-spacing: 0.05em;
  font-weight: 500;
  cursor: pointer;
`;
