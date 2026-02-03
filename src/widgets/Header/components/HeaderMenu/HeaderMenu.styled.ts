import styled from "styled-components";

export const Nav = styled.div`
  display: none;

  @media ${({ theme }) => theme.media.tabletLg} {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
  }
  @media ${({ theme }) => theme.media.desktop} {
    gap: 35px;
  }
`;

export const NavItem = styled.button`
  all: unset;
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #fff;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.6);
    outline-offset: 4px;
    border-radius: 4px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 15px;
    letter-spacing: 0.1em;
  }
`;
