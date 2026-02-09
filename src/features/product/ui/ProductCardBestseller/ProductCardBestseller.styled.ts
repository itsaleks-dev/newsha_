import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardLink = styled(Link)`
  display: block;
  height: 100%;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

export const Card = styled.article`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 520px;

  @media ${({ theme }) => theme.media.mobileLg} {
    min-height: 570px;
  }
  @media ${({ theme }) => theme.media.tablet} {
    min-height: 500px;
  }

  border-radius: 26px;
  overflow: hidden;

  background: #f2f2f2;

  display: flex;
  flex-direction: column;
`;

export const ImageWrap = styled.div`
  position: relative;

  height: calc(100% - 200px);
  background: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`;

export const Image = styled.img`
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 50%;
`;

export const CardOverlay = styled.div`
  position: absolute;
  top: 14px;
  left: 14px;
  right: 14px;
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: space-between;

  pointer-events: none;
`;

export const BadgeStack = styled.div`
  display: flex;
  gap: 6px;
  pointer-events: auto;
`;

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 8px 14px;
  min-height: 24px;

  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  line-height: 1;

  border-radius: 10px;
  white-space: nowrap;

  background: linear-gradient(135deg, #2d1e2f, #4e2a4f);
  color: #fff;
`;

export const WishlistBtn = styled.button<{ $active?: boolean }>`
  pointer-events: auto;

  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: none;

  background: #fff;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 20px;
    opacity: ${({ $active }) => ($active ? 1 : 0.6)};
  }
`;

export const Bottom = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 210px;
  padding: 18px 18px 20px;

  background: #242424;
  color: #fff;

  border-radius: 26px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Title = styled.h3`
  text-align: center;
  line-height: 1.4;

  .en,
  .ua {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
  }

  .en {
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.05em;

    line-height: 1.4;
    min-height: calc(2 * 1.4em);
  }

  .ua {
    margin-top: 3px;
    font-size: 13px;
    letter-spacing: 0.05em;
    font-weight: 500;
    opacity: 0.7;

    line-height: 1.4;
    min-height: calc(2 * 1.4em);
  }
`;

export const Price = styled.span`
  margin-top: auto;
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-align: center;
`;

export const BuyBtn = styled.button<{ $pending?: boolean }>`
  position: relative;
  overflow: hidden;
  height: 44px;
  padding: 0 16px;
  border-radius: 14px;
  border: none;
  background: #fff;
  color: #000;
  font-size: 16px;
  letter-spacing: 0.04em;
  font-weight: 500;
  cursor: pointer;

  transition:
    color 0.25s ease,
    transform 0.15s ease;

  &:active {
    transform: scale(0.96);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgb(220, 60, 60);
    transform-origin: left;
    transform: scaleX(0);
    transition: transform linear;
    z-index: 1;
  }

  span {
    position: relative;
    z-index: 2;
    transition: color 0.25s ease;
  }

  ${({ $pending }) =>
    $pending &&
    `
      cursor: default;

      span {
        color: #242424;
      }

      &::before {
        transform: scaleX(1);
        transition-duration: 4s;
      }
    `}
`;
