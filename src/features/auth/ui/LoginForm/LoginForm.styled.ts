import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 14px;

  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.15);

  font-size: 14px;
  line-height: 1.4;

  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};

  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.black};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.black};
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;

  & > button {
    width: 100%;
    max-width: 260px;
  }
`;

export const Divider = styled.div`
  margin: 18px 0;

  display: flex;
  align-items: center;
  gap: 12px;

  font-size: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.5);

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
  gap: 10px;

  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.15);

  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  font-weight: 500;

  cursor: pointer;
  transition:
    background 0.15s ease,
    border-color 0.15s ease;

  img {
    width: 18px;
    height: 18px;
    opacity: 0.85;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.04);
    border-color: rgba(0, 0, 0, 0.25);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  & + & {
    margin-top: 6px;
  }
`;

/* -------------------------------------------------- */
/* Error text                                         */
/* -------------------------------------------------- */

export const ErrorText = styled.p`
  margin-top: 2px;

  font-size: 12px;
  line-height: 1.4;
  color: #c62828;
`;
