import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { IQuickLink } from '@shared/interfaces';
import { ReactElement } from 'react';

import { CreateForm } from '../create-form';

interface IProps {
  isOpen: boolean;
  handleClose: () => void;
  handleSubmit: (values: IQuickLink, rowName?: string) => void;
  defaultValues?: IQuickLink;
}

export const EditLinkDialog = ({
  isOpen,
  handleClose,
  handleSubmit,
  defaultValues,
}: IProps): ReactElement => {
  return (
    <Dialog onClose={handleClose} open={isOpen}>
      <DialogTitle>Edit link</DialogTitle>
      <DialogContent>
        <CreateForm handleSubmit={handleSubmit} defaultValues={defaultValues}/>
      </DialogContent>
    </Dialog>
  );
};
