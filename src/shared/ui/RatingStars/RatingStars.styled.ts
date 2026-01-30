import styled from "styled-components";

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Stars = styled.div`
  display: flex;
  gap: 1px;

  span {
    color: ${({ theme }) => theme.colors.star};
  }
`;

export const RatingValue = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.caption};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const RatingCount = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.caption};
  color: #555555;
`;
