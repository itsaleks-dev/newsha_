import styled from "styled-components";

export const MobileSearchWrapper = styled.div`
  margin-top: 6px;

  @media ${({ theme }) => theme.media.tabletLg} {
    display: none;
  }
`;
