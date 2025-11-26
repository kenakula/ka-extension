import styled from "styled-components";
import { Avatar, ContextMenu } from "radix-ui";

export const ContextMenuContainer = styled(ContextMenu.Content)`
  background: rgba(77, 77, 77, 0.8);
  border-radius: 8px;
  padding: 10px 0;
`;

export const ContextItem = styled(ContextMenu.Item)`
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 4px 10px;
  cursor: pointer;
  transition: background 0.2s ease-in;

  &[data-disabled] {
    opacity: 0.3;
    cursor: default;
  }

  &:hover:not([data-disabled]) {
    background: rgba(208, 208, 208, 0.6);
  }

  &:active:not([data-disabled]) {
    background: rgba(208, 208, 208, 0.5);
  }
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const LinkLabel = styled.span`
  font-size: 12px;
  margin-top: 5px;
`;

export const LinkItemStyled = styled.li`
  display: flex;
  min-width: 42px;
`;

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: aliceblue;
  text-decoration: none;
  font-size: 18px;
  transition: all 0.2s ease-in;
  border-radius: 16px;
  min-width: 67px;
  min-height: 67px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  &:active {
    opacity: 0.5;
  }
`;

export const LinkImage = styled(Avatar.Root)`
  display: flex;
  border-radius: 8px;
  overflow: hidden;
`;
