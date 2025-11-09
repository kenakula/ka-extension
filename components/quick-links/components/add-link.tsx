import { ReactElement } from "react";
import { Popover } from "radix-ui";
import { AddPopover, LinkItemStyled, AddLinkButton } from "../styles";
import { SlPlus } from "react-icons/sl";
import { CreateForm } from "./create-form/create-form";
import { IQuickLink } from "~shared/interfaces";
import { Tooltip } from "~components/tooltip";

interface IProps {
  rowName: string;
  addLink: (link: IQuickLink, rowName: string) => void;
}

export const AddLink = ({ rowName, addLink }: IProps): ReactElement => {
  return (
    <Popover.Root>
      <Tooltip text="add link">
        <LinkItemStyled>
          <AddLinkButton>
            <SlPlus size={18} />
          </AddLinkButton>
        </LinkItemStyled>
      </Tooltip>
      <Popover.Portal>
        <AddPopover sideOffset={20}>
          <CreateForm rowName={rowName} handleSubmit={addLink} />
        </AddPopover>
      </Popover.Portal>
    </Popover.Root>
  );
};
