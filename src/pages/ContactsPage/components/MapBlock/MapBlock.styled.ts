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

export const MapWrapper = styled.div`
  width: 100%;
  height: 280px;
  border-radius: 12px;
  overflow: hidden;
  background: #f2f2f2;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;
