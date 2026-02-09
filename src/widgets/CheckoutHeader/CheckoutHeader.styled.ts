import styled from "styled-components";

export const Header = styled.header`
  height: 64px;
  padding: 0 16px;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  background: #ffffff;
  border-bottom: 1px solid #e5e5e5;
`;

export const BackButton = styled.button`
  border: none;
  background: none;

  font-size: 14px;
  color: #555;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;
