import styled from "styled-components";

import { flex } from "@/shared/theme/variables";

export const BlockActions = styled.div`
  ${flex};
  align-items: center;
  gap: 15px;

  @media ${({ theme }) => theme.media.desktop} {
    gap: 25px;
  }
`;
