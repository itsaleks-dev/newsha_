import styled from "styled-components";

export const Root = styled.div`
  margin: 10px 0;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const Track = styled.div<{
  $animate: boolean;
  $translateX: number;
}>`
  display: flex;
  transform: translateX(${({ $translateX }) => `-${$translateX * 100}%`});
  transition: ${({ $animate }) => ($animate ? "transform 0.4s ease" : "none")};
  will-change: transform;
`;

export const Slide = styled.div`
  position: relative;
  flex: 0 0 100%;
  height: 550px;
  border-radius: 16px;
  overflow: hidden;

  @media ${({ theme }) => theme.media.tabletLg} {
    height: 600px;
  }
  @media ${({ theme }) => theme.media.laptop} {
    height: 700px;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;

    background: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35));
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 10%;
    display: block;

    @media ${({ theme }) => theme.media.laptop} {
      object-position: center 30%;
    }
  }
`;

export const Content = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  color: #fff;
  padding: 0 10px;
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
  letter-spacing: 0.06em;
`;

export const Button = styled.button`
  margin-top: 60px;
  padding: 14px 32px;

  background: #000;
  color: #fff;
  border: none;
  border-radius: 999px;

  font-size: 14px;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  cursor: pointer;
  transition: background 0.25s ease;

  &:hover {
    background: #222;
  }
`;

export const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
`;

export const Dot = styled.button<{ $active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  padding: 0;
  cursor: pointer;
  background: ${({ $active }) => ($active ? "#000" : "#bbb")};

  @media ${({ theme }) => theme.media.laptop} {
    width: 10px;
    height: 10px;
  }
`;
