import styled from "styled-components";

export const PageSection = styled.section`
  width: 100%;
  padding: 20px 0;
`;

export const Inner = styled.div`
  width: 100%;
`;

export const SectionHeader = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const SectionTitle = styled.h1`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
`;

export const EmptyState = styled.p`
  margin-top: 40px;
  font-size: 14px;
  text-align: center;
  color: #8a8a8a;
`;
