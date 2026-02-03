import styled from "styled-components";

export const Root = styled.div`
  margin: 10px 0;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const Track = styled.div<{ $animate: boolean }>`
  display: flex;
  transform: translateX(var(--x));
  transition: ${({ $animate }) => ($animate ? "transform 0.4s ease" : "none")};
  will-change: transform;
`;

export const Slide = styled.div`
  flex: 0 0 100%;
  height: 550px;

  @media ${({ theme }) => theme.media.tabletLg} {
    height: 600px;
  }
  @media ${({ theme }) => theme.media.laptop} {
    height: 700px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 10%;
    display: block;
    border-radius: 16px;

    @media ${({ theme }) => theme.media.laptop} {
      object-position: center 30%;
    }
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
