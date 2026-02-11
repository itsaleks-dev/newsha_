import styled from "styled-components";

export const Page = styled.main`
  padding: 40px 0;
`;

export const PageSection = styled.section`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const PageTitle = styled.h1`
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const SectionBlock = styled.div`
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;

export const SectionTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.05em;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.05em;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Note = styled.p`
  margin-top: 24px;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.05em;
`;
