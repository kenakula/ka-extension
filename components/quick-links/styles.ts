import { Avatar, ContextMenu, Dialog, Popover, Tooltip } from "radix-ui";
import styled from "styled-components";
import { Form } from "formik";

export const LinksSet = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
  max-width: 70%;
`;

export const LinksRow = styled.div`
  position: relative;
`;

export const LinksRowControls = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const LinksList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  border-radius: 22px;
`;

export const LinkItemStyled = styled.li`
  display: flex;
  min-width: 42px;
`;

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
`;

export const LinkImage = styled(Avatar.Root)`
  display: flex;
  border-radius: 8px;
  overflow: hidden;
`;

export const AddLinkButton = styled(Popover.Trigger)`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s ease-in;

  &:hover {
    opacity: 0.5;
  }

  &:active {
    opacity: 0.3;
  }
`;

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

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  & > button {
    align-self: center;
  }
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const EditDialog = styled(Dialog.Content)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 100px;
  background-color: rgba(240, 248, 255, 0.23);
  padding: 10px;
  border-radius: 8px;
`;

export const AddPopover = styled(Popover.Content)`
  background-color: rgba(240, 248, 255, 0.23);
  padding: 10px;
  border-radius: 8px;
`;

export const TooltipContent = styled(Tooltip.Content)`
  background-color: rgba(240, 248, 255, 0.1);
  border-radius: 20px;
  padding: 5px 10px;
`;

export const GenericButton = styled.button`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 5px;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  transition: opacity 0.2s ease-in;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const RemoveRowButton = styled(GenericButton)`
  display: flex;
  align-items: center;
  column-gap: 5px;
  color: #fd5d5d;
`;

export const SettingsButton = styled(Dialog.Trigger)`
  position: absolute;
  left: 20px;
  top: 20px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  transition: opacity 0.2s ease-in;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const SettingsContent = styled(Dialog.Content)`
  position: absolute;
  z-index: 100;
  right: 0;
  top: 0;
  bottom: 0;
  width: 350px;
  padding: 10px 20px;
  background-color: rgba(240, 248, 255, 0.2);
`;

export const DialogOverlay = styled(Dialog.Overlay)`
  background-color: rgba(42, 52, 64, 0.7);
  backdrop-filter: blur(5px);
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`;

export const DialogTitle = styled(Dialog.Title)`
  margin: 0 0 20px;
  text-align: center;
`;

export const DialogSection = styled.div``;

export const DialogSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DialogSectionTitle = styled.h3`
  margin: 0 0 20px;
`;

export const DialogSectionList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  gap: 10px;
  list-style: none;

  li {
    display: flex;
    column-gap: 20px;
    width: 100%;

    & > span {
      margin-right: auto;
    }
  }
`;
