import styled from "styled-components";

export const CartRow = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 10px;
  align-items: center;
  padding: 10px 0;
  border-radius: 16px;
`;

export const CartRowImage = styled.div`
  width: 64px;
  height: 80px;
  border-radius: 12px;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media ${({ theme }) => theme.media.tablet} {
    width: 80px;
  }
`;

export const CartRowInfo = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CartRowTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CartRowMeta = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
`;

export const CartRowQty = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  span {
    min-width: 20px;
    text-align: center;
    font-weight: 700;
  }
`;

export const QtyButton = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 999px;
  border: none;
  padding: 0;
  background: rgba(0, 0, 0, 0.75);
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

export const CartRowPrice = styled.div`
  grid-column: 2 / -1;
  justify-self: flex-end;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
`;

export const RemoveButton = styled.button`
  grid-column: 3;
  justify-self: end;
  border: none;
  padding: 0;
  background: transparent;
  font-size: 13px;
  color: red;
  cursor: pointer;
`;
