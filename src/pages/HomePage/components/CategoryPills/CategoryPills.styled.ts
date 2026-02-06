import styled from "styled-components";

export const Section = styled.section`
  margin: 30px 0;
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
  display: flex;
  gap: 16px;

  padding: 28px 60px 28px 20px;
  margin: -28px 0;

  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Card = styled.button`
  flex: 0 0 72%;
  scroll-snap-align: start;

  position: relative;
  aspect-ratio: 1.2 / 1;
  border-radius: 16px;
  border: none;
  padding: 0;
  overflow: hidden;

  background: #eaeaea;
  cursor: pointer;

  transition: transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:active {
    transform: scale(0.98);
  }
`;

export const Image = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;

  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 40%,
    rgba(0, 0, 0, 0.1) 65%,
    rgba(0, 0, 0, 0.25) 85%,
    rgba(0, 0, 0, 0.4) 100%
  );
  mix-blend-mode: multiply;
`;

export const Pill = styled.div`
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 14px;
  height: 50px;
  padding: 10px 0;
  border-radius: 12px;

  background: rgba(36, 36, 36, 0.55);
  backdrop-filter: blur(6px);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CategoryTitle = styled.h3`
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.05em;
  line-height: 1.6;
  text-align: center;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
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
