import { ReactElement } from "react";
import {
  AddPopover,
  LinksRowControls,
  PopoverTrigger,
  RemoveRowButton,
  TooltipContent,
} from "../styles";
import { Popover, Tooltip } from "radix-ui";
import { SlMinus, SlPlus } from "react-icons/sl";
import { CreateForm } from "./create-form";
import { IQuickLink } from "~shared/interfaces";

interface IProps {
  handleAddLink: (values: IQuickLink, rowName?: string) => void;
  handleRemoveRow: (rowName: string) => void;
  rowName: string;
  isRowEmpty: boolean;
}

export const RowControls = ({
  handleRemoveRow,
  handleAddLink,
  rowName,
  isRowEmpty,
}: IProps): ReactElement => {
  return (
    <LinksRowControls>
      <Popover.Root>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <PopoverTrigger>
                <SlPlus size={18} />
              </PopoverTrigger>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <TooltipContent sideOffset={10}>add link</TooltipContent>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
        <Popover.Portal>
          <AddPopover sideOffset={20}>
            <CreateForm rowName={rowName} handleSubmit={handleAddLink} />
          </AddPopover>
        </Popover.Portal>
      </Popover.Root>
      {isRowEmpty ? (
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <RemoveRowButton onClick={() => handleRemoveRow(rowName)}>
                <SlMinus size={18} />
              </RemoveRowButton>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <TooltipContent sideOffset={10}>remove row</TooltipContent>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      ) : null}
    </LinksRowControls>
  );
};
