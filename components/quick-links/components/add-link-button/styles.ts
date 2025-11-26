import styled from "styled-components";
import { Popover } from "radix-ui";

export const AddPopover = styled(Popover.Content)`
  background-color: rgba(240, 248, 255, 0.23);
  padding: 10px;
  border-radius: 8px;
`;

export const LinkItemStyled = styled.li`
  display: flex;
  min-width: 42px;
`;

export const StyledAddLinkButton = styled(Popover.Trigger)`
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
