import { ReactElement } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { SlMinus } from 'react-icons/sl';

import { LinksRowControls } from './styles';

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
      <button type="button" onClick={() => handleRemoveRow(rowName)}>
        <SlMinus size={18}/>
        <span>Remove</span>
      </button>
      <button onClick={() => toggleRowVisibility(rowName)}>
        {isHidden ? <FiEye size={18}/> : <FiEyeOff size={18}/>}
        <span>{isHidden ? 'Show' : 'Hide'}</span>
      </button>
    </LinksRowControls>
  );
};
