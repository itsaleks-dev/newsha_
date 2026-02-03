import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  margin-top: 10px;
  z-index: 2000;
`;

export const HeaderSection = styled.div`
  height: 70px;
  padding: 0 15px;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  border-radius: 18px;
  background: #242424;

  @media ${({ theme }) => theme.media.tabletLg} {
    height: 80px;
  }
  @media ${({ theme }) => theme.media.desktop} {
    height: 100px;
    padding: 0 25px;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
