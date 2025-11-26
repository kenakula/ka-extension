import { ReactElement } from "react";
import { LinksRowControls, RemoveRowButton, GenericButton } from "../../styles";
import { SlMinus } from "react-icons/sl";
import { FiEye, FiEyeOff } from "react-icons/fi";

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
