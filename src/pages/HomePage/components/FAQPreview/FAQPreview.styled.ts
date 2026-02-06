import styled from "styled-components";

export const Section = styled.section`
  margin: 30px 0;
`;

export const Header = styled.div`
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 16px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-weight: 600;
`;

export const SubTitle = styled.p`
  margin: 10px 0 30px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.05em;
  opacity: 0.6;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 10px;
`;

export const Item = styled.li`
  border-bottom: 1px solid #e6e6e6;
`;

export const Question = styled.button`
  width: 100%;
  padding: 14px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: none;
  border: none;

  font-size: 14px;
  letter-spacing: 0.03em;
  color: #242424;
  text-align: left;

  cursor: pointer;

  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.65;
  }
`;

export const Arrow = styled.span<{ $open: boolean }>`
  font-size: 18px;
  line-height: 1;
  color: #242424;

  transform: rotate(${({ $open }) => ($open ? "90deg" : "0deg")});
  transition: transform 0.25s ease;
`;

export const Answer = styled.div<{ $open: boolean }>`
  display: grid;
  grid-template-rows: ${({ $open }) => ($open ? "1fr" : "0fr")};

  transition: grid-template-rows 0.35s ease;

  > div {
    overflow: hidden;
  }

  p {
    margin: 0 0 14px;
    padding-right: 24px;

    font-size: 13.5px;
    line-height: 1.55;
    color: #555;

    opacity: ${({ $open }) => ($open ? 1 : 0)};
    transform: translateY(${({ $open }) => ($open ? "0" : "-4px")});

    transition:
      opacity 0.25s ease,
      transform 0.25s ease;
  }
`;
