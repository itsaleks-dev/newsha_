import styled from "styled-components";

import { flexLeft, flexCenter, flexRight, headerGrid } from "@/shared/theme/variables";

export const HeaderContainer = styled.header`
  position: relative;
  margin-top: 10px;
  z-index: 2000;
`;

export const HeaderSection = styled.div`
  height: 80px;
  padding: 0 10px;
  ${headerGrid};
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.graphite};

  @media ${({ theme }) => theme.media.mobileLg} {
    padding: 0 15px;
  }

  @media ${({ theme }) => theme.media.laptop} {
    height: 100px;
    padding: 0 25px;
  }
`;

export const Left = styled.div`
  ${flexLeft};
`;

export const Center = styled.div`
  ${flexCenter};
`;

export const Right = styled.div`
  ${flexRight};
`;
