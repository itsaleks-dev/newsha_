import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding-block: 32px 40px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.04em;
  margin-bottom: 32px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  font-size: 14px;
  line-height: 1.6;
  opacity: 0.85;
`;
