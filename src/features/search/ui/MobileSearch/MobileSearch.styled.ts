import styled from "styled-components";

export const MobileSearchWrapper = styled.div`
  margin-top: 6px;

  @media ${({ theme }) => theme.media.laptop} {
    display: none;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 45px;
  padding: 0 10px;

  border-radius: 12px;
  border: 3px solid #f6f4f1;
  outline: none;

  font-size: 16px;
  line-height: 1.2;

  background: #fff;
  color: #000;

  &::placeholder {
    font-size: 14px;
    color: #777777;
  }
`;
