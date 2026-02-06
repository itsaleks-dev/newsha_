import styled from "styled-components";

export const Section = styled.section`
  margin: 56px 0;
`;

export const Track = styled.div`
  display: flex;
  gap: 12px;
  padding: 8px 0 12px;

  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Pill = styled.button<{ $active?: boolean }>`
  position: relative;
  flex: 0 0 auto;
  scroll-snap-align: start;

  display: flex;
  align-items: center;
  justify-content: space-between;

  min-width: 160px;
  padding: 14px 18px 14px 22px;
  border-radius: 16px;
  border: none;

  background: ${({ $active }) => ($active ? "#1f1f1f" : "#2b2b2b")};
  color: #fff;

  font-size: 13px;
  letter-spacing: 0.05em;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.15s ease;

  &:hover {
    background: #1f1f1f;
  }

  &:active {
    transform: scale(0.96);
  }
`;

export const PillArrow = styled.span<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  line-height: 1;
  margin-left: 12px;

  color: #fff;

  transform: translateX(${({ $active }) => ($active ? "4px" : "0")});
  transition: transform 0.2s ease;
`;

export const Progress = styled.div`
  margin-top: 10px;
  height: 2px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 999px;
  overflow: hidden;
`;

export const ProgressBar = styled.div`
  height: 100%;
  background: #242424;
  transition: transform 0.3s ease;
`;

export const Dropdown = styled.div`
  margin-top: 18px;
  max-width: 420px;
  margin-inline: auto;

  background: rgba(36, 36, 36, 0.9);
  border-radius: 18px;
  padding: 14px;

  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.4);

  animation: fadeIn 0.22s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const DropdownList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const DropdownItem = styled.li`
  padding: 12px 14px;
  border-radius: 12px;

  font-size: 14px;
  letter-spacing: 0.05em;
  color: #fff;

  cursor: pointer;

  background: rgba(255, 255, 255, 0.05);
  transition:
    background 0.2s ease,
    transform 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    transform: translateX(4px);
  }
`;
