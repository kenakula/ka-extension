import { Button } from '@radix-ui/themes';
import { ReactElement } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { SlMinus } from 'react-icons/sl';

import { LinksRowControls, RemoveRowButton } from './styles';

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
        <SlMinus size={18}/>
        <span>Remove</span>
      </RemoveRowButton>
      <Button onClick={() => toggleRowVisibility(rowName)}>
        {isHidden ? <FiEye size={18}/> : <FiEyeOff size={18}/>}
        <span>{isHidden ? 'Show' : 'Hide'}</span>
      </Button>
    </LinksRowControls>
  );
};
