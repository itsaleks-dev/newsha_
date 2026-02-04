import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`;

export const EmptyState = styled.div`
  padding: 48px;
  text-align: center;
  color: #242224;
`;
