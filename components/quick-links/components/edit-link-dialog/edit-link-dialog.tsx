import { Dialog, DialogDescription, DialogTitle } from '@components/dialog';
import { IQuickLink } from '@shared/interfaces';
import { VisuallyHidden } from 'radix-ui';
import { ReactElement } from 'react';

import { CreateForm } from '../create-form/create-form';
import { EditDialog } from './styles';

interface IProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  handleSubmit: (values: IQuickLink, rowName?: string) => void;
  defaultValues?: IQuickLink;
}

export const EditLinkDialog = ({
  isOpen,
  onOpenChange,
  handleSubmit,
  defaultValues,
}: IProps): ReactElement => {
  return (
    <Dialog onOpenChange={onOpenChange} isOpen={isOpen}>
      <EditDialog>
        <DialogTitle>Edit link</DialogTitle>
        <VisuallyHidden.Root>
          <DialogDescription>
            Edit link by defining url and label
          </DialogDescription>
        </VisuallyHidden.Root>
        <CreateForm handleSubmit={handleSubmit} defaultValues={defaultValues} />
      </EditDialog>
    </Dialog>
  );
};
