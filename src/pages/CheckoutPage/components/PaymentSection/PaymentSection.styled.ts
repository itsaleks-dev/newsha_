import styled from "styled-components";

export const Section = styled.section`
  margin-top: 32px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const Cards = styled.div`
  display: grid;
  gap: 12px;
`;

export const PaymentCard = styled.button<{ $active: boolean }>`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 16px;
  border: 1px solid ${({ $active }) => ($active ? "#111" : "rgba(0,0,0,0.12)")};
  background: ${({ $active }) => ($active ? "#fff" : "rgba(255,255,255,0.85)")};
  cursor: pointer;
  text-align: left;

  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.18s ease,
    background 0.25s ease;

  box-shadow: ${({ $active }) =>
    $active ? "0 10px 30px rgba(0,0,0,0.12)" : "0 2px 8px rgba(0,0,0,0.04)"};

  transform: ${({ $active }) => ($active ? "scale(1.02)" : "scale(1)")};

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(0.99);
  }

  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 2px rgba(0, 0, 0, 0.15),
      0 10px 30px rgba(0, 0, 0, 0.12);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardIcons = styled.div`
  display: flex;
  gap: 8px;

  span {
    padding: 4px 8px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 600;
    background: #f2f2f2;
    color: #111;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CardTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
`;

export const CardDescription = styled.div`
  font-size: 13px;
  color: #777;
`;

export const CardForm = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CardRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

export const PayButton = styled.button`
  margin-top: 12px;
  padding: 14px;
  border-radius: 14px;
  border: none;
  background: #111;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #000;
  }
`;
