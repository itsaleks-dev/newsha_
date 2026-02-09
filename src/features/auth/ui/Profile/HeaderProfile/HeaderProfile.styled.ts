import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-radius: 16px;
  background: #ffffff;
`;

export const AvatarBlock = styled.div`
  position: relative;
  flex-shrink: 0;
`;

export const Avatar = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  overflow: hidden;

  background: #e5e5e5;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 28px;
  font-weight: 600;
  color: #555;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const EditAvatarButton = styled.button`
  position: absolute;
  bottom: -4px;
  right: -4px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: none;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);

  font-size: 13px;
  cursor: pointer;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0;
`;

export const Name = styled.div`
  font-size: 15px;
  font-weight: 600;
  line-height: 1.2;
`;

export const Email = styled.div`
  font-size: 13px;
  color: #777;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const EditProfileButton = styled.button`
  padding: 8px 12px;
  border-radius: 10px;
  border: none;
  background: #e53935;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;

  cursor: pointer;
`;
