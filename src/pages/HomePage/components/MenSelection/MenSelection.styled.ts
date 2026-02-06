import styled from "styled-components";

export const Section = styled.section`
  margin: 60px 0;
`;

export const Header = styled.div`
  padding: 10px 0;
`;

export const Title = styled.h2`
  font-size: 16px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-weight: 600;
`;

export const SubTitle = styled.p`
  margin: 10px 0 30px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.05em;
  opacity: 0.6;
`;

export const Track = styled.div`
  width: 100%;
  max-width: 100%;

  display: flex;
  align-items: stretch;

  gap: 16px;

  overflow-x: auto;
  overflow-y: visible;

  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  padding: 4px 0 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Slide = styled.div`
  flex: 0 0 85vw;
  scroll-snap-align: start;
`;

export const Indicators = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const Dot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? "60px" : "6px")};
  height: 6px;
  border-radius: 999px;
  border: none;
  padding: 0;

  background: ${({ $active }) => ($active ? "#000" : "#bbb")};
  transition: all 0.25s ease;
  cursor: pointer;
`;
