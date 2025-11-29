import { useQuickLinks } from '@components/quick-links/quick-links-context';
import { Popover } from '@mui/material';
import { ReactElement } from 'react';
import { MouseEvent, useState } from 'react';
import { SlPlus } from 'react-icons/sl';

import { LinkForm } from '../link-form';
import { LinkItemStyled, PopoverContent, StyledAddLinkButton } from './styles';

interface IProps {
  rowId: string;
}

export const AddLinkButton = ({ rowId }: IProps): ReactElement => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const { handleAddLink } = useQuickLinks();

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
          <LinkForm mode="add" rowId={rowId} handleSubmit={handleAddLink} handleClosePopover={handleClose}/>
        </PopoverContent>
      </Popover>
    </>
  );
};
