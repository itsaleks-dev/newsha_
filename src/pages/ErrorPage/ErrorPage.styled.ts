import styled from "styled-components";
import { Link } from "react-router-dom";

export const Page = styled.main`
  min-height: 100vh;
  padding: 48px 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #fafafa;
`;

export const Box = styled.section`
  max-width: 520px;
  width: 100%;
  text-align: center;
`;

export const Code = styled.div`
  font-size: clamp(64px, 10vw, 96px);
  font-weight: 600;
  letter-spacing: 0.18em;
  margin-bottom: 16px;
`;

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 14px;
`;

export const Description = styled.p`
  font-size: 15px;
  line-height: 1.6;
  opacity: 0.75;
  margin-bottom: 36px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Button = styled(Link)<{ $primary?: boolean }>`
  padding: 14px 32px;
  border-radius: 999px;

  font-size: 13px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-decoration: none;

  background: ${({ $primary }) => ($primary ? "#000" : "transparent")};
  color: ${({ $primary }) => ($primary ? "#fff" : "#000")};
  border: 1px solid #000;

  transition:
    background 0.25s ease,
    color 0.25s ease,
    transform 0.15s ease;

  &:hover {
    background: ${({ $primary }) => ($primary ? "#222" : "#f2f2f2")};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;
