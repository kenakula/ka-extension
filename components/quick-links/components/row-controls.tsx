import { ReactElement } from "react";
import {
  AddPopover,
  LinksRowControls,
  AddLinkButton,
  RemoveRowButton,
  TooltipContent,
  GenericButton,
} from "../styles";
import { Popover, Tooltip } from "radix-ui";
import { SlMinus, SlPlus } from "react-icons/sl";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { CreateForm } from "./create-form";
import { IQuickLink } from "~shared/interfaces";

interface IProps {
  handleRemoveRow: (rowName: string) => void;
  rowName: string;
  isHidden: boolean;
  toggleRowVisibility: (rowName: string) => void;
}

export const RowControls = ({
  handleRemoveRow,
  rowName,
  isHidden,
  toggleRowVisibility,
}: IProps): ReactElement => {
  return (
    <LinksRowControls>
      <RemoveRowButton onClick={() => handleRemoveRow(rowName)}>
        <SlMinus size={18} />
        <span>Remove</span>
      </RemoveRowButton>
      <GenericButton onClick={() => toggleRowVisibility(rowName)}>
        {isHidden ? <FiEye size={18} /> : <FiEyeOff size={18} />}
        <span>{isHidden ? "Show" : "Hide"}</span>
      </GenericButton>
    </LinksRowControls>
  );
};
