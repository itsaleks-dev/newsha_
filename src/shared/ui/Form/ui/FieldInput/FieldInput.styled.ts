import styled from "styled-components";

export const StyledInput = styled.input<{ $hasError: boolean }>`
  width: 100%;
  padding: 12px 14px;
  margin-top: 6px;

  border-radius: 12px;
  border: 1px solid ${({ $hasError }) => ($hasError ? "#d64545" : "#ddd")};
  background: #f7f7f7;

  font-size: 14px;

  transition:
    border-color 0.2s ease,
    background 0.2s ease;

  &:focus {
    background: #fff;
    border-color: #111;
    outline: none;
  }
`;
