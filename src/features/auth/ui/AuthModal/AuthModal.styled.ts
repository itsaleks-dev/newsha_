import styled from "styled-components";

import { flexCenter, flexColumn, flexBetween } from "@/shared/theme/variables";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.35);
  ${flexCenter};
`;

export const ModalBox = styled.div`
  position: fixed;
  top: 95px;
  width: calc(100vw - 20px);
  max-width: 420px;
  ${flexColumn};
  padding: 30px 20px;
  gap: 20px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.graphite};
  color: ${({ theme }) => theme.colors.white};
`;

export const HeaderRow = styled.div`
  ${flexBetween};
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  letter-spacing: ${({ theme }) => theme.textMetrics.letterSpacing};
  text-align: center;
  text-transform: uppercase;
`;

export const SwitchLink = styled.button`
  margin-top: 10px;
  padding: 0;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.caption};
  letter-spacing: ${({ theme }) => theme.textMetrics.letterSpacing};
  color: ${({ theme }) => theme.colors.white};
  background: none;
  cursor: pointer;
`;

export const CloseButton = styled.button`
  width: 28px;
  height: 28px;
  padding: 0;
  border-radius: 999px;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.h4};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.graphite};
  cursor: pointer;
`;
