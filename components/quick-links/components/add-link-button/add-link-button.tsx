import { Tooltip } from '@components/tooltip';
import { IQuickLink } from '@shared/interfaces';
import { Popover } from 'radix-ui';
import { ReactElement } from 'react';
import { SlPlus } from 'react-icons/sl';

import { CreateForm } from '../create-form';
import { AddPopover, LinkItemStyled, StyledAddLinkButton } from './styles';

interface IProps {
  rowName: string;
  addLink: (link: IQuickLink, rowName: string) => void;
}

export const AddLinkButton = ({ rowName, addLink }: IProps): ReactElement => {
  return (
    <Popover.Root>
      <Tooltip text="add link">
        <LinkItemStyled>
          <StyledAddLinkButton>
            <SlPlus size={18}/>
          </StyledAddLinkButton>
        </LinkItemStyled>
      </Tooltip>
      <Popover.Portal>
        <AddPopover sideOffset={20}>
          <CreateForm rowName={rowName} handleSubmit={addLink}/>
        </AddPopover>
      </Popover.Portal>
    </Popover.Root>
  );
};
