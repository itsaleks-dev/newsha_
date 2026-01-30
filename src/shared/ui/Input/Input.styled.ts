import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #111111;
`;

export const StyledInput = styled.input`
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid #cccccc;
  background: #f7f7f7;
  font-size: 14px;
  color: #111111;

  transition:
    border-color 0.2s ease,
    background 0.2s ease;

  &:focus {
    outline: none;
    border-color: #111111;
    background: #ffffff;
  }
`;

export const ErrorText = styled.div`
  font-size: 12px;
  color: #d64545;
`;
