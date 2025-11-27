import { Popover } from '@mui/material';
import { IQuickLink } from '@shared/interfaces';
import { ReactElement } from 'react';
import { MouseEvent, useState } from 'react';
import { SlPlus } from 'react-icons/sl';

import { CreateForm } from '../create-form';
import { LinkItemStyled, PopoverContent, StyledAddLinkButton } from './styles';

interface IProps {
  rowName: string;
  addLink: (link: IQuickLink, rowName: string) => void;
}

export const AddLinkButton = ({ rowName, addLink }: IProps): ReactElement => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <>
      <LinkItemStyled>
        <StyledAddLinkButton onClick={handleClick}>
          <SlPlus size={18}/>
        </StyledAddLinkButton>
      </LinkItemStyled>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <PopoverContent>
          <CreateForm rowName={rowName} handleSubmit={addLink}/>
        </PopoverContent>
      </Popover>
    </>
  );
};
