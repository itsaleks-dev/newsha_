import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  margin-inline: auto;

  max-width: ${({ theme }) => theme.containers.mobile};
  padding-inline: 10px;

  @media ${({ theme }) => theme.media.tablet} {
    max-width: ${({ theme }) => theme.containers.tablet};
    padding-inline: 24px;
  }
  @media ${({ theme }) => theme.media.tabletLg} {
    max-width: ${({ theme }) => theme.containers.tabletLg};
    padding-inline: 28px;
  }

  @media ${({ theme }) => theme.media.laptop} {
    max-width: ${({ theme }) => theme.containers.laptop};
    padding-inline: 32px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    max-width: ${({ theme }) => theme.containers.desktop};
    padding-inline: 40px;
  }
`;
