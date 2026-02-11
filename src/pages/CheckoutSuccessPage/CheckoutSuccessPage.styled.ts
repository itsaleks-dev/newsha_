import styled from "styled-components";

import { flexCenter, flexColumn } from "@/shared/theme/variables";

export const Wrapper = styled.div`
  ${flexCenter};
`;

export const Card = styled.div`
  max-width: 420px;
  width: 100%;
  padding: 32px 24px;
  ${flexColumn};
  align-items: center;
  gap: 14px;
  border-radius: 18px;
  background: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const Icon = styled.div`
  font-size: 42px;
`;

export const Title = styled.h1`
  font-size: 22px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: #555;
  line-height: 1.5;
`;

export const OrderId = styled.div`
  margin-top: 6px;
  font-size: 14px;
`;

export const Actions = styled.div`
  margin-top: 18px;
  width: 100%;
  ${flexColumn};
  gap: 10px;
`;

export const PrimaryButton = styled.button`
  width: 100%;
  padding: 14px;
  border-radius: 14px;
  border: none;
  background: #000;
  color: #fff;
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  cursor: pointer;
`;

export const SecondaryButton = styled.button`
  width: 100%;
  padding: 14px;
  border-radius: 14px;
  border: 1px solid #ddd;
  background: #fff;
  color: #000;
  font-size: 14px;
  cursor: pointer;
`;
