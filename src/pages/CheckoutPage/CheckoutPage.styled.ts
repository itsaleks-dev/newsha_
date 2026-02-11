import styled from "styled-components";

export const SubmitButton = styled.button`
  margin-top: 24px;
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 14px;
  background: #000;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition:
    background 0.15s ease,
    transform 0.1s ease,
    opacity 0.15s ease;

  &:hover:not(:disabled) {
    background: #111;
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;
