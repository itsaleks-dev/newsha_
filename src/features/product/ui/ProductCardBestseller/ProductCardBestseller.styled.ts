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

  height: 180px;
  padding: 18px 18px 20px;

  background: #242424;
  color: #fff;

  border-radius: 26px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
  }

  .en {
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.05em;
    -webkit-line-clamp: 2;
  }

  .ua {
    margin-top: 3px;
    font-size: 13px;
    letter-spacing: 0.05em;
    font-weight: 500;
    opacity: 0.7;
    -webkit-line-clamp: 2;
  }
`;

export const Price = styled.span`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-align: center;
`;

export const BuyBtn = styled.button`
  height: 42px;
  border-radius: 14px;
  border: none;

  background: #fff;
  color: #000;

  font-size: 16px;
  letter-spacing: 0.04em;
  font-weight: 500;

  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
