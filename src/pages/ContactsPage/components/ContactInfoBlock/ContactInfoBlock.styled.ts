import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding-block: 32px 40px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.04em;
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 1.6;
  opacity: 0.8;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

export const Label = styled.span`
  font-size: 14px;
  opacity: 0.7;
`;

export const Value = styled.span`
  font-size: 14px;
  font-weight: 500;
`;
