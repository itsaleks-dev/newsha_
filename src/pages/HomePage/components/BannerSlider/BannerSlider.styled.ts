import styled from "styled-components";

export const Section = styled.section`
  margin: 10px 0;
  overflow: hidden;
`;

export const Track = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SlideRoot = styled.div`
  flex: 0 0 100%;
  scroll-snap-align: start;
  margin-right: 12px;
  height: 550px;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: #eee;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const Content = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  padding: 0 16px;
`;

export const SubTitle = styled.p`
  font-size: 14px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  opacity: 0.9;
`;

export const Title = styled.h2`
  margin-top: 12px;
  font-size: 32px;
  font-weight: 600;
`;

export const Button = styled.button`
  margin-top: 48px;
  padding: 14px 32px;

  background: #000;
  color: #fff;
  border: none;
  border-radius: 999px;

  font-size: 14px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
`;

export const Indicators = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const Dot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? "60px" : "6px")};
  height: 6px;
  border-radius: 999px;
  border: none;
  background: ${({ $active }) => ($active ? "#000" : "#bbb")};
  transition: all 0.25s ease;
  cursor: pointer;
`;
