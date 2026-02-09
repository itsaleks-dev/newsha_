import styled from "styled-components";

export const Tabs = styled.div`
  display: flex;
  gap: 8px;
`;

export const Tab = styled.button<{ $active?: boolean }>`
  padding: 8px 12px;
  border: none;
  border-radius: 10px;

  background: ${({ $active }) => ($active ? "#000" : "#eee")};
  color: ${({ $active }) => ($active ? "#fff" : "#000")};

  font-size: 14px;
  cursor: pointer;
`;
