import styled from "styled-components";

import { flexColumn } from "@/shared/theme/variables";

export const Footer = styled.footer`
  background: ${({ theme }) => theme.colors.white};
`;

export const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 40px 10px;
  gap: 40px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.graphite};

  @media ${({ theme }) => theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${({ theme }) => theme.media.laptop} {
    grid-template-columns: repeat(4, 1fr);
    padding: 60px 25px;
  }
`;

export const Column = styled.div`
  ${flexColumn};
`;

export const Title = styled.h4`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  letter-spacing: ${({ theme }) => theme.textMetrics.letterSpacing};
  text-transform: uppercase;

  @media ${({ theme }) => theme.media.desktop} {
    font-size: ${({ theme }) => theme.fontSizes.body};
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
  font-size: ${({ theme }) => theme.fontSizes.caption};
  letter-spacing: ${({ theme }) => theme.textMetrics.letterSpacing};
  color: ${({ theme }) => theme.colors.textMuted};
  text-decoration: none;

  @media ${({ theme }) => theme.media.desktop} {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Text = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.caption};
  letter-spacing: ${({ theme }) => theme.textMetrics.letterSpacing};
  color: ${({ theme }) => theme.colors.textMuted};

  @media ${({ theme }) => theme.media.desktop} {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

export const Copyright = styled.div`
  padding: 30px 0;
  font-size: ${({ theme }) => theme.fontSizes.caption};
  text-align: center;
  letter-spacing: ${({ theme }) => theme.textMetrics.letterSpacing};
  color: ${({ theme }) => theme.colors.graphite};
`;
