import styled from "styled-components";

export const CartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CartEmptyState = styled.div`
  padding: 24px 8px;
  font-size: 16px;
  line-height: 1.6;
  text-align: center;
  letter-spacing: 0.05em;

  color: ${({ theme }) => theme.colors.black};
`;
