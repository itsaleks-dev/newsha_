import styled from "styled-components";

import { flexColumn } from "@/shared/theme/variables";

export const LogoRoot = styled.div`
  ${flexColumn};
  align-items: center;
  line-height: 1;
`;

export const LogoImage = styled.img`
  display: block;
  height: 16px;

  @media ${({ theme }) => theme.media.laptop} {
    height: 20px;
  }
  @media ${({ theme }) => theme.media.desktop} {
    height: 24px;
  }
`;

export const Tagline = styled.span`
  margin-top: 5px;
  font-size: ${({ theme }) => theme.fontSizes.mini};
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};

  @media ${({ theme }) => theme.media.laptop} {
    margin-top: 7px;
    font-size: ${({ theme }) => theme.fontSizes.captionSmall};
    letter-spacing: 0.11em;
  }
  @media ${({ theme }) => theme.media.desktop} {
    margin-top: 7px;
    font-size: ${({ theme }) => theme.fontSizes.caption};
    letter-spacing: 0.11em;
  }
`;
