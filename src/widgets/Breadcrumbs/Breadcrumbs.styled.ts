import styled from "styled-components";

export const Wrapper = styled.nav`
  margin: 10px 0;
`;

export const List = styled.ol`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li<{ "data-active"?: boolean }>`
  font-size: 12px;
  color: #242424;

  &[data-active] {
    color: ${({ theme }) => theme.colors.black};
    font-weight: 500;
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
