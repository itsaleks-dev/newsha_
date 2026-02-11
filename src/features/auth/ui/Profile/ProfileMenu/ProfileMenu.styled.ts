import styled from "styled-components";

import { flexColumn, flexBetween } from "@/shared/theme/variables";

export const List = styled.div`
  margin-top: 24px;
  ${flexColumn};
`;

export const Item = styled.button`
  width: 100%;
  padding: 14px 16px;
  ${flexBetween};
  border: none;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  transition: background 0.15s ease;

  &::after {
    content: "›";
    font-size: 18px;
    line-height: 1;
    color: rgba(0, 0, 0, 0.35);
    transform: translateY(-1px);
  }

  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }

  & + & {
    border-top: 1px solid rgba(0, 0, 0, 0.06);
  }
`;

export const LogoutItem = styled(Item)`
  margin-top: 8px;
  color: #c62828;

  &::after {
    color: rgba(198, 40, 40, 0.6);
  }

  &:hover {
    background: rgba(198, 40, 40, 0.08);
  }
`;
