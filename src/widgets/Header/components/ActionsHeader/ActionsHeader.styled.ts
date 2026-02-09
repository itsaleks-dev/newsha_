import styled from "styled-components";

export const BlockActions = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media ${({ theme }) => theme.media.desktop} {
    gap: 25px;
  }
`;
