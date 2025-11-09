import { ReactElement } from "react";
import { Dialog, VisuallyHidden } from "radix-ui";
import { CreateForm } from "./create-form";
import { DialogOverlay, DialogTitle, EditDialog } from "../styles";
import { IQuickLink } from "~shared/interfaces";

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
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <DialogOverlay />
        <EditDialog>
          <DialogTitle>Edit link</DialogTitle>
          <VisuallyHidden.Root>
            <Dialog.Description>
              Edit link by defining url and label
            </Dialog.Description>
          </VisuallyHidden.Root>
          <CreateForm
            handleSubmit={handleSubmit}
            defaultValues={defaultValues}
          />
        </EditDialog>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
