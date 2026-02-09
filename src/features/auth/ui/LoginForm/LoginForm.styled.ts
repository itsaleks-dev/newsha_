import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
`;

export const Button = styled.button`
  margin-top: 12px;
`;

export const Divider = styled.div`
  margin: 16px 0;

  display: flex;
  align-items: center;
  gap: 12px;

  font-size: 14px;
  line-height: 1;
  text-align: center;
  color: #777777;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: rgba(0, 0, 0, 0.15);
  }
`;

export const OAuthButton = styled.button`
  width: 100%;
  padding: 10px 12px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border: none;
  border-radius: 12px;

  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;

  cursor: pointer;

  img {
    width: 18px;
    height: 18px;
    opacity: 0.85;
  }

  & + & {
    margin-top: 6px;
  }
`;

export const ErrorText = styled.p`
  margin-top: 4px;
  font-size: 13px;
  line-height: 1.4;
  color: red;
`;
