import styled from "styled-components";

export const Section = styled.section`
  margin: 30px 0;
`;

export const Title = styled.h2`
  font-size: 16px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-weight: 600;
`;

export const List = styled.ul`
  margin: 20px 0 24px;
  padding: 0 10px;
  list-style: none;

  li {
    padding: 10px 0;
    border-bottom: 1px solid #e6e6e6;

    font-size: 14px;
    letter-spacing: 0.03em;
    color: #242424;
  }
`;

export const Text = styled.div`
  p {
    margin: 0 0 12px;
    letter-spacing: 0.05em;
    font-size: 13px;
    line-height: 1.6;
    color: #333;
  }
`;

export const Hint = styled.p`
  margin-top: 16px;
  letter-spacing: 0.05em;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
  color: #242424;
`;
