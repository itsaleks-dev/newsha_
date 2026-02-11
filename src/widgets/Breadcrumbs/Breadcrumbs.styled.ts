import styled from "styled-components";

import { flex } from "@/shared/theme/variables";

export const Wrapper = styled.nav`
  margin: 10px 0;
`;

export const List = styled.ol`
  padding: 0;
  margin: 0;
  ${flex};
  flex-wrap: wrap;
  gap: 4px;
  list-style: none;
`;

export const Item = styled.li<{ "data-active"?: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes.caption};
  color: ${({ theme }) => theme.colors.graphite};

  &[data-active] {
    color: ${({ theme }) => theme.colors.black};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Separator = styled.span`
  margin: 0 6px;
`;
