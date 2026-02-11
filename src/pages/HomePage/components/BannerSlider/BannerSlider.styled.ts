import styled from "styled-components";
import { dotBase, flexCenter, flex, objectCover } from "@/shared/theme/variables";

export const Section = styled.section`
  margin: 10px 0;
  overflow: hidden;
`;

export const Track = styled.div`
  width: 100%;
  max-width: 100%;
  ${flex};
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SlideRoot = styled.div`
  position: relative;
  flex: 0 0 90%;
  height: 520px;
  scroll-snap-align: start;
  border-radius: 16px;
  overflow: hidden;
  background: #eee;

  img {
    ${objectCover};
    object-position: center 10%;
  }

  @media ${({ theme }) => theme.media.laptop} {
    flex: 0 0 95%;
    height: 600px;
  }
`;

export const Content = styled.div`
  position: absolute;
  inset: 0;
  padding: 0 16px;
  ${flexCenter};
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const SubTitle = styled.p`
  padding: 12px 24px;
  background: rgba(0, 0, 0, 0.8);
  border: none;
  border-radius: 12px;
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 600;
  letter-spacing: ${({ theme }) => theme.textMetrics.letterSpacing};
  text-transform: uppercase;
  opacity: 0.9;
`;

export const Title = styled.h2`
  margin-top: 12px;
  font-size: ${({ theme }) => theme.fontSizes.h4};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: ${({ theme }) => theme.textMetrics.letterSpacing};
  text-transform: uppercase;
`;

export const Button = styled.button`
  margin-top: 48px;
  padding: 14px 32px;
  border: none;
  border-radius: 16px;
  font-size: ${({ theme }) => theme.fontSizes.small};
  letter-spacing: ${({ theme }) => theme.textMetrics.letterSpacing};
  text-transform: uppercase;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};
`;

export const Indicators = styled.div`
  margin-top: 12px;
  ${flex};
  justify-content: center;
  gap: 8px;
`;

export const Dot = styled.button<{ $active: boolean }>`
  ${dotBase()};
`;
