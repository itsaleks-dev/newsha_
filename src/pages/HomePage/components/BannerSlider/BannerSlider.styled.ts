import styled from "styled-components";
import { dotBase, flexCenter, flex, objectCover } from "@/shared/theme/variables";

export const Section = styled.section`
  margin: 10px 0;
  overflow: hidden;
`;

export const Track = styled.div`
  ${flex};
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SlideRoot = styled.div`
  position: relative;
  flex: 0 0 100%;
  margin-right: 12px;
  height: 550px;
  border-radius: 16px;
  scroll-snap-align: start;
  overflow: hidden;
  background: #eee;

  img {
    ${objectCover};
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
  font-size: ${({ theme }) => theme.fontSizes.small};
  letter-spacing: ${({ theme }) => theme.textMetrics.letterSpacing};
  text-transform: uppercase;
  opacity: 0.9;
`;

export const Title = styled.h2`
  margin-top: 12px;
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  letter-spacing: ${({ theme }) => theme.textMetrics.letterSpacing};
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
