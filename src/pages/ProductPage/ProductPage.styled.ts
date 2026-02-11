import styled from "styled-components";

export const Page = styled.div`
  padding: 48px 0;
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

export const Top = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 64px;
`;

export const ImageWrap = styled.div`
  position: relative;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.15);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const VolumeFloating = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  z-index: 5;

  & > div {
    position: static;
    transform: none;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h1`
  line-height: 1.4;

  .en {
    display: block;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.05em;
  }

  .ua {
    margin-top: 4px;
    display: block;
    font-size: 18px;
    opacity: 0.7;
    letter-spacing: 0.05em;
  }
`;

export const ShortDescription = styled.p`
  font-size: 15px;
  line-height: 1.6;
  opacity: 0.8;
`;

export const Price = styled.div`
  font-size: 28px;
  font-weight: 500;
  letter-spacing: 0.05em;
`;

export const BuyRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const BuyBtn = styled.button`
  height: 48px;
  padding: 0 24px;
  border-radius: 16px;
  border: none;
  background: #242424;
  color: #fff;
  font-size: 16px;
  letter-spacing: 0.04em;
  cursor: pointer;
`;

export const Description = styled.section`
  max-width: 900px;

  h2 {
    font-size: 20px;
    margin-bottom: 16px;
  }

  p {
    white-space: pre-line;
    line-height: 1.8;
    font-size: 15px;
    opacity: 0.9;
  }
`;
