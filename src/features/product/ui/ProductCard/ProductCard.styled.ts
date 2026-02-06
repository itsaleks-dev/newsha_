import styled from "styled-components";

export const Card = styled.article`
  position: relative;
  width: 100%;
  min-height: 550px;
  aspect-ratio: 3 / 4;
  border-radius: 26px;
  overflow: hidden;
  background: #f2f2f2;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.15);
`;

export const ImageWrap = styled.div`
  position: relative;
  height: 65%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Image = styled.img<{ $active: boolean }>`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transform: scale(${({ $active }) => ($active ? 1 : 1.02)});

  transition:
    opacity 0.48s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    transform 1.05s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  will-change: opacity, transform;
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

export const Badge = styled.div<{ $variant: "new" | "bestseller" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 6px 12px;
  min-height: 24px;

  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  line-height: 1;

  border-radius: 14px;
  white-space: nowrap;

  ${({ $variant }) =>
    $variant === "new" &&
    `
      background: #9e9e9e;
      color: #fff;
    `}

  ${({ $variant }) =>
    $variant === "bestseller" &&
    `
      background: linear-gradient(135deg, #2d1e2f, #4e2a4f);
      color: #fff;
    `}
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

  min-height: 210px;
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
  min-height: 56px;

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

export const RatingPriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;

  .rating {
    display: flex;
    align-items: center;
    line-height: 1;
  }
`;

export const Price = styled.span`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.05em;
  line-height: 1;
`;

export const BuyRow = styled.div`
  margin-top: 14px;
  display: flex;
  align-items: center;
  gap: 12px;

  > button {
    flex: 1;
  }
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

export const VolumeFloating = styled.div`
  position: absolute;
  top: 40%;
  right: 0;
  transform: translateY(-50%);
  z-index: 3;

  & > div {
    position: static;
    transform: none;
  }
`;
