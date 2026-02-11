import styled from "styled-components";

export const Page = styled.main`
  margin: 0 auto;
  padding: 30px 10px 80px;
`;

export const PageSection = styled.section`
  &:not(:last-child) {
    margin-bottom: 64px;
  }
`;

export const PageTitle = styled.h1`
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

export const SectionBlock = styled.div`
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;

export const SectionTitle = styled.h2`
  margin-bottom: 15px;
  font-size: 16px;
  text-align: center;
  font-weight: 500;
  letter-spacing: 0.06em;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 1.6;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Note = styled.p`
  margin-top: 24px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.6;
`;
