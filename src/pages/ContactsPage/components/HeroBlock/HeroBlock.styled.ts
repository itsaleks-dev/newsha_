import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding-block: 32px 40px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
  letter-spacing: 0.04em;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  line-height: 1.6;
  opacity: 0.75;
  max-width: 520px;
`;
