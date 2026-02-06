import styled from "styled-components";

export const Section = styled.section`
  padding: 60px 0;
`;

export const Header = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  font-size: 16px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-weight: 600;
`;

export const Subtitle = styled.div`
  margin-top: 10px;
  font-size: 16px;
  letter-spacing: 0.05em;
  opacity: 0.6;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const Card = styled.a`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  aspect-ratio: 1 / 1.15;
  background: #e7e2da;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:hover img {
    transform: scale(1.08);
  }
`;

export const Footer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

export const Button = styled.a`
  padding: 16px 32px;
  border-radius: 16px;
  background: #242424;
  color: #fff;
  letter-spacing: 0.05em;
  font-size: 12px;
  text-transform: uppercase;
`;
