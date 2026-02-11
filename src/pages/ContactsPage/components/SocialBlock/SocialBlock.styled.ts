import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding-block: 32px 40px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.04em;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li``;

export const Link = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 999px;
  font-size: 13px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid #000;
  color: #000;
  background: transparent;
  transition:
    background 0.25s ease,
    transform 0.15s ease;

  &:hover {
    background: #f2f2f2;
    transform: translateY(-1px);
  }
`;
