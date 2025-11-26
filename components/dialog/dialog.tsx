import { Dialog as LibDialog } from 'radix-ui';
import { ComponentType, PropsWithChildren, ReactElement } from 'react';

import { DialogOverlay } from './styles';

interface IProps extends PropsWithChildren {
  isOpen?: boolean;
  trigger?: ComponentType;
  onOpenChange?: (isOpen: boolean) => void;
}

export const Dialog = ({
  isOpen,
  onOpenChange,
  children,
  trigger: Trigger,
}: IProps): ReactElement => {
  return (
    <LibDialog.Root open={isOpen} onOpenChange={onOpenChange}>
      {Trigger ? <Trigger /> : null}
      <LibDialog.Portal>
        <DialogOverlay />
        {children}
      </LibDialog.Portal>
    </LibDialog.Root>
  );
};
