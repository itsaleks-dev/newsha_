import styled from "styled-components";

export const Wrapper = styled.div`
  display: none;

  @media ${({ theme }) => theme.media.tabletLg} {
    display: block;
    position: relative;
  }
`;

export const Popover = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 320px;
`;
