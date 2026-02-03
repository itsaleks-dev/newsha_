import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  margin-inline: auto;

  /* Mobile first */
  max-width: ${({ theme }) => theme.containers.mobile};
  padding-inline: 5px;

  /* Tablet */
  @media ${({ theme }) => theme.media.tablet} {
    max-width: ${({ theme }) => theme.containers.tablet};
    padding-inline: 24px;
  }
  /* Tablet landscape / 1024 */
  @media ${({ theme }) => theme.media.tabletLg} {
    max-width: ${({ theme }) => theme.containers.tabletLg};
    padding-inline: 28px;
  }

  /* Laptop */
  @media ${({ theme }) => theme.media.laptop} {
    max-width: ${({ theme }) => theme.containers.laptop};
    padding-inline: 32px;
  }

  /* Desktop and wider */
  @media ${({ theme }) => theme.media.desktop} {
    max-width: ${({ theme }) => theme.containers.desktop};
    padding-inline: 40px;
  }
`;
