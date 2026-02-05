import styled from "styled-components";

export const Page = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  width: 100%;
  padding-block: 32px 40px;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
  letter-spacing: 0.04em;
  margin-bottom: 16px;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  line-height: 1.6;
  opacity: 0.75;
  max-width: 640px;
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 1.7;
  opacity: 0.85;
  max-width: 720px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-left: 18px;
  margin: 0;
`;

export const ListItem = styled.li`
  font-size: 14px;
  line-height: 1.6;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
`;

export const CardText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  opacity: 0.85;
`;
