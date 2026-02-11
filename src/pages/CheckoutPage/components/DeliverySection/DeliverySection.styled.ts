import styled from "styled-components";

export const Section = styled.section`
  margin-top: 32px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const Methods = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

export const MethodButton = styled.button<{ $active?: boolean }>`
  flex: 1;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid ${({ $active }) => ($active ? "#000" : "#ddd")};
  background: ${({ $active }) => ($active ? "#000" : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "#000")};
  font-size: 14px;
  cursor: pointer;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 12px;

  label {
    font-size: 13px;
    color: #555;
  }

  input {
    padding: 12px;
    border-radius: 12px;
    border: 1px solid #ddd;
    font-size: 14px;
  }
`;
