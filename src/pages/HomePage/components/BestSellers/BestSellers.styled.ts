import styled from "styled-components";
import { dotBase, flex } from "@/shared/theme/variables";

export const Section = styled.section`
  margin: 60px 0;
`;

export const Header = styled.div`
  padding: 10px 0;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.body};
  letter-spacing: ${({ theme }) => theme.textMetrics.letterSpacing};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const SubTitle = styled.p`
  margin: 10px 0 30px;
  font-size: ${({ theme }) => theme.fontSizes.bodySmall};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: ${({ theme }) => theme.textMetrics.letterSpacing};
  opacity: 0.6;
`;

export const Track = styled.div`
  padding: 4px 0 10px;
  width: 100%;
  ${flex};
  align-items: stretch;
  gap: 16px;
  overflow-x: auto;
  overflow-y: visible;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Slide = styled.div`
  flex: 0 0 85vw;
  scroll-snap-align: start;
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
