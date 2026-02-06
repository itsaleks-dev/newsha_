import { css } from "styled-components";

import { DotOptions } from "@/shared/theme/variables/config";

export const dotBase = ({
  activeWidth = "60px",
  inactiveWidth = "6px",
  height = "6px",
  activeColor = "#000",
  inactiveColor = "#bbb",
}: DotOptions = {}) => css<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? activeWidth : inactiveWidth)};
  height: ${height};
  padding: 0;
  border-radius: 999px;
  border: none;
  background: ${({ $active }) => ($active ? activeColor : inactiveColor)};
  cursor: pointer;
  transition:
    width 0.25s ease,
    background-color 0.25s ease;
`;
