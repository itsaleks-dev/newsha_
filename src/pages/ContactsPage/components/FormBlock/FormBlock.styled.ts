import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding-block: 32px 40px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.04em;
  margin-bottom: 24px;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
`;

export const FullWidth = styled.div`
  grid-column: 1 / -1;
`;
