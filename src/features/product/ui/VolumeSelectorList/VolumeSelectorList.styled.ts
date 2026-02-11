import styled from "styled-components";

export const VolumeSelector = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  transform: translateY(-50%);
`;

export const VolumeOption = styled.button<{ $active: boolean }>`
  padding: 12px 14px 12px ${({ $active }) => ($active ? "36px" : "20px")};
  border: none;
  border-radius: 14px 0 0 14px;
  background: ${({ theme, $active }) => ($active ? theme.colors.black : theme.colors.white)};
  font-size: 12px;
  letter-spacing: 0.05em;
  font-weight: ${({ $active }) => ($active ? 600 : 500)};
  color: ${({ theme, $active }) => ($active ? theme.colors.white : theme.colors.black)};
  text-align: right;
  white-space: nowrap;
  cursor: pointer;
  transition:
    padding 0.24s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    background 0.24s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    color 0.24s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    padding-left: ${({ $active }) => ($active ? "44px" : "22px")};
  }
`;
