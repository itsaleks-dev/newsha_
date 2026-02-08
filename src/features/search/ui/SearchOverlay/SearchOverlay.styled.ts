import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 3000;
  background: rgba(0, 0, 0, 0.35);
`;

export const Panel = styled.div`
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100vw - 20px);
  max-width: 960px;
  max-height: calc(100dvh - 120px);
  z-index: 3000;
  display: flex;
  flex-direction: column;
  padding: 20px 12px 16px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.9);
  overflow: hidden;
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;

export const Input = styled.input`
  flex: 1;
  height: 44px;
  padding: 0 12px;
  border-radius: 12px;
  border: none;
  outline: none;
  background: #f4f3f2;
  color: #242424;
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0.02em;

  &::placeholder {
    color: #777777;
    letter-spacing: 0.05em;
    opacity: 0.7;
  }

  &:focus {
    background: #ffffff;
  }
`;

export const CloseButton = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 999px;
  border: none;
  padding: 0;
  background: rgba(0, 0, 0, 0.75);
  color: #ffffff;
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
`;

export const Results = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const ResultItem = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 10px;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
`;

export const Thumb = styled.div`
  width: 64px;
  height: 80px;
  border-radius: 16px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const Info = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.div`
  font-size: 14px;
  letter-spacing: 0.05em;
  font-weight: 600;
  line-height: 1.6;
  color: #000000;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const SubTitle = styled.div`
  font-size: 12px;
  letter-spacing: 0.05em;
  font-weight: 500;
  line-height: 1.6;
  opacity: 0.7;
`;

export const LoadingText = styled.div`
  padding: 20px 0;
  text-align: center;
  font-size: 14px;
  letter-spacing: 0.05em;
  color: #242424;
`;

export const EmptyState = styled(LoadingText)``;

export const Footer = styled.div`
  padding-top: 12px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
`;

export const ViewAllButton = styled.button`
  width: 100%;
  max-width: 440px;
  margin-top: 14px;
  padding: 15px;
  border-radius: 14px;
  border: none;
  background: #242424;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.05em;
  cursor: pointer;
`;
