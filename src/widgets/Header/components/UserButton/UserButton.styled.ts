import styled from "styled-components";

import { Icon } from "@/shared/ui/IconButton";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.button`
  padding: 0;
  border: none;
  background: none;

  font-size: 14px;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.black};

  cursor: pointer;
`;

export const TextButton = styled.button`
  padding: 0;
  border: none;
  background: none;

  font-size: 14px;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.black};

  cursor: pointer;
`;

export const UserIcon = styled(Icon)`
  display: none;

  @media ${({ theme }) => theme.media.tabletLg} {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: 24px;
    height: 24px;

    border: 0;
    background: none;
    cursor: pointer;
  }
`;
