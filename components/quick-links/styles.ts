import { Avatar, ContextMenu, Popover } from "radix-ui"
import styled from "styled-components";

export const LinksList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  max-width: 70%;
  list-style: none;
`

export const LinkItemStyled = styled.li`
  display: flex;
`

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  color: aliceblue;
  text-decoration: none;
  font-size: 18px;
  transition: opacity 0.2s ease-in;
  
  &:hover {
    opacity: 0.7;
  }
  
  &:active {
    opacity: 0.5;
  }
`

export const LinkImage = styled(Avatar.Root)`
  display: flex;
  border-radius: 8px;
  overflow: hidden;
`

export const PopoverTrigger = styled(Popover.Trigger)`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const ContextMenuContainer = styled(ContextMenu.Content)`
  background: rgba(77, 77, 77, 0.8);
  border-radius: 8px;
  padding: 10px 0;
`

export const ContextItem = styled(ContextMenu.Item)`
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 4px 10px;
  cursor: pointer;
  
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
`

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`