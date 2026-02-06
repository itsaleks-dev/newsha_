import styled from "styled-components";

export const Section = styled.section`
  padding: 40px 0 0;
`;

export const Header = styled.div`
  padding-bottom: 40px;
`;

export const Title = styled.h2`
  font-size: 16px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-weight: 600;
`;

export const Subtitle = styled.div`
  margin-top: 10px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.05em;
  opacity: 0.6;
`;

export const Right = styled.div`
  height: 420px;
  overflow: hidden;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  touch-action: pan-y;
  mask-image: linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%);
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 12%,
    black 88%,
    transparent 100%
  );
`;

export const Track = styled.div`
  display: flex;
  flex-direction: column;
  will-change: transform;
`;

export const Item = styled.div`
  padding-left: 26px;
  border-left: 2px solid rgba(0, 0, 0, 0.15);
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    line-height: 1.6;
  }

  span {
    display: block;
    margin-top: 8px;
    font-size: 15px;
    letter-spacing: 0.05em;
    opacity: 0.6;
  }
`;
