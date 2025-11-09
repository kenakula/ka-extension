import { ReactElement } from "react";
import { Popover, Tooltip } from "~node_modules/radix-ui";
import {
  AddPopover,
  LinkItemStyled,
  AddLinkButton,
  TooltipContent,
} from "~components/quick-links/styles";
import { SlPlus } from "~node_modules/react-icons/sl";
import { CreateForm } from "~components/quick-links/components/create-form";
import { IQuickLink } from "~shared/interfaces";

interface IProps {
  rowName: string;
  addLink: (link: IQuickLink, rowName: string) => void;
}

export const AddLink = ({ rowName, addLink }: IProps): ReactElement => {
  return (
    <Popover.Root>
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <LinkItemStyled>
              <AddLinkButton>
                <SlPlus size={18} />
              </AddLinkButton>
            </LinkItemStyled>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <TooltipContent>add link</TooltipContent>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
      <Popover.Portal>
        <AddPopover sideOffset={20}>
          <CreateForm rowName={rowName} handleSubmit={addLink} />
        </AddPopover>
      </Popover.Portal>
    </Popover.Root>
  );
};
