import styled from "styled-components";

export const LogoRoot = styled.div`
  display: inline-flex;
  flex-direction: column;
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
  font-size: 7px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #fff;

  @media ${({ theme }) => theme.media.laptop} {
    margin-top: 7px;
    font-size: 10px;
    letter-spacing: 0.11em;
  }
  @media ${({ theme }) => theme.media.desktop} {
    margin-top: 7px;
    font-size: 12px;
    letter-spacing: 0.11em;
  }
`;
