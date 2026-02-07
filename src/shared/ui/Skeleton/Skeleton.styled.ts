import styled, { keyframes } from "styled-components";

import type { SkeletonProps } from "./types/Skeleton.types";

const shimmer = keyframes`
  from { background-position: -200px 0; }
  to   { background-position: 200px 0; }
`;

function toCssSize(value?: string | number) {
  if (value === undefined) return undefined;
  return typeof value === "number" ? `${value}px` : value;
}

export const SkeletonBlock = styled.div<SkeletonProps>`
  background: #777777;
  background-size: 200px 100%;
  animation: ${shimmer} 1.2s infinite linear;
  will-change: background-position;

  width: ${({ width }) => toCssSize(width) || "100%"};
  height: ${({ height }) => toCssSize(height) || "20px"};
  border-radius: ${({ radius }) => toCssSize(radius) || "8px"};

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
