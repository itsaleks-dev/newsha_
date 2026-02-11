import styled from "styled-components";

import { flexColumn } from "@/shared/theme/variables";

export const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 3000;
  background: rgba(0, 0, 0, 0.45);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transition: opacity 0.25s ease;
`;

export const Panel = styled.aside<{ $open: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 84%;
  max-width: 320px;
  height: 100%;
  background: #fff;
  transform: translateX(${({ $open }) => ($open ? "0" : "-100%")});
  transition: transform 0.3s ease;
  ${flexColumn};
  padding: 24px 20px;
`;

export const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 16px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 4px;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Item = styled.button`
  background: none;
  border: none;
  padding: 0;
  text-align: left;
  font-size: 15px;
  letter-spacing: 0.04em;
  color: #1f1f1f;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.6;
  }
`;

export const Account = styled.div`
  padding-top: 18px;
  margin-top: 18px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
`;

export const AccountItem = styled(Item)`
  font-weight: 600;
`;
