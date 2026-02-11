import styled from "styled-components";

export const Section = styled.section`
  margin: 30px 0;
`;

export const Inner = styled.div`
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 16px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 28px;
`;

export const TextBlock = styled.div`
  margin-bottom: 32px;

  p {
    margin: 0 0 14px;
    font-size: 14px;
    line-height: 1.6;
    letter-spacing: 0.05em;
    color: #333;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Values = styled.ul`
  list-style: none;
  margin: 0 0 36px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Value = styled.li`
  font-size: 13.5px;
  letter-spacing: 0.05em;
  color: #242424;
  position: relative;
  padding-left: 14px;

  &::before {
    content: "—";
    position: absolute;
    left: 0;
    opacity: 0.4;
  }
`;

export const Closing = styled.div`
  margin-top: 48px;

  p {
    margin: 0 0 14px;
    font-size: 14px;
    line-height: 1.6;
    color: #444;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const ClosingTitle = styled.h3`
  margin-bottom: 18px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;
