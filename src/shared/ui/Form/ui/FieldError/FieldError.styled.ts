import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ErrorText = styled.div.attrs({
  role: "alert",
  "aria-live": "assertive",
})`
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.35;
  color: #d64545;

  animation: ${fadeIn} 0.18s cubic-bezier(0.16, 1, 0.3, 1);
`;
