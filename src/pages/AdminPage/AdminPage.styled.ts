import styled from "styled-components";

export const Header = styled.header`
  margin-bottom: 32px;
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  color: #777;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
`;

export const Card = styled.div`
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #e5e5e5;
  background: #fff;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }

  h3 {
    margin-bottom: 6px;
  }

  p {
    color: #666;
    font-size: 14px;
  }
`;

export const LogoutButton = styled.button`
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background: #fff;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #f5f5f5;
  }
`;
