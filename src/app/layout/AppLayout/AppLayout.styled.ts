import styled from "styled-components";

export const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  transition: background-color 0.35s ease;
`;

export const Content = styled.main.attrs({ id: "main-content" })`
  flex: 1 0 auto;
  width: 100%;
`;
