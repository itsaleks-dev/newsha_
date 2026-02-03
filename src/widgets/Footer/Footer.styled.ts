import styled from "styled-components";

export const Footer = styled.footer`
  background: #fff;
`;

export const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 40px 10px;
  gap: 40px;
  border-radius: 18px;
  background: #242424;

  @media ${({ theme }) => theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${({ theme }) => theme.media.laptop} {
    grid-template-columns: repeat(4, 1fr);
    padding: 60px 25px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h4`
  margin-bottom: 20px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 16px;
  }
`;

export const List = styled.ul`
  margin: 0 10px;
  list-style: none;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Link = styled.a`
  font-size: 13px;
  letter-spacing: 0.1em;
  color: #cfcfcf;
  text-decoration: none;

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 14px;
  }

  &:hover {
    color: #ffffff;
  }
`;

export const Text = styled.span`
  font-size: 13px;
  letter-spacing: 0.1em;
  color: #cfcfcf;

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 14px;
  }
`;

export const Copyright = styled.div`
  padding: 30px 0;
  font-size: 12px;
  text-align: center;
  letter-spacing: 0.06em;
  color: #242424;
`;
