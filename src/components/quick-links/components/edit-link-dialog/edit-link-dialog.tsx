import { useQuickLinks } from '@components/quick-links/quick-links-context';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { ReactElement } from 'react';

import { LinkForm } from '../link-form';

export const EditLinkDialog = (): ReactElement => {
  const { editingLink, handleEditLinkDialog, handleEditLink } = useQuickLinks();

  const onClose = (): void => {
    handleEditLinkDialog(null);
  };

  return (
    <Dialog onClose={onClose} open={!!editingLink} maxWidth="sm" fullWidth={true}>
      <DialogTitle>Edit link</DialogTitle>
      {editingLink ? (
        <DialogContent>
          <LinkForm
            rowId={editingLink.rowId}
            defaultValues={editingLink}
            handleSubmit={handleEditLink}
            mode="edit"
          />
        </DialogContent>
      ) : null}
    </Dialog>
  );
};
