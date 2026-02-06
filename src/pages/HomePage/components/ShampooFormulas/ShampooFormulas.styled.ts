import styled from "styled-components";

export const Section = styled.section`
  margin: 72px 0;
`;

export const Header = styled.div`
  padding: 10px 0;
`;

export const SectionTitle = styled.h2`
  font-size: 16px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-weight: 600;
`;

export const SectionSubTitle = styled.p`
  margin: 10px 0 30px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.05em;
  opacity: 0.6;
`;

export const Banner = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 16px;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const List = styled.ul`
  list-style: none;
  margin: 28px 16px 0;
  padding: 0;

  display: flex;
  flex-direction: column;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);

  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.65;
  }
`;

export const ItemText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemTitle = styled.span`
  font-size: 14.5px;
  font-weight: 500;
  letter-spacing: 0.03em;
  color: #1f1f1f;
`;

export const ItemDescription = styled.span`
  margin-top: 4px;
  font-size: 13.5px;
  line-height: 1.45;
  color: #6f6f6f;
`;

export const Arrow = styled.span`
  font-size: 20px;
  line-height: 1;
  color: #1f1f1f;
`;
