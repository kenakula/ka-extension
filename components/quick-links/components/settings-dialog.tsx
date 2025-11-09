import { ReactElement } from "react";
import {
  DialogOverlay,
  DialogSection,
  DialogSectionHeader,
  DialogSectionList,
  DialogSectionTitle,
  DialogTitle,
  GenericButton,
  SettingsButton,
  SettingsContent,
} from "../styles";
import { FiSettings } from "~node_modules/react-icons/fi";
import { Dialog, VisuallyHidden } from "~node_modules/radix-ui";
import { TQuickLinksPanel } from "~shared/interfaces";
import { RowControls } from "~components/quick-links/components/row-controls";
import { SlPlus } from "react-icons/sl";

interface IProps {
  addRow: (rowName?: string) => void;
  removeRow: (rowName: string) => void;
  linksPanel: TQuickLinksPanel;
  toggleRowVisibility: (rowName: string) => void;
}

export const SettingsDialog = ({
  addRow,
  removeRow,
  linksPanel,
  toggleRowVisibility,
}: IProps): ReactElement => {
  return (
    <Dialog.Root>
      <SettingsButton>
        <FiSettings size={36} />
      </SettingsButton>
      <Dialog.Portal>
        <DialogOverlay />
        <SettingsContent>
          <DialogTitle>Settings</DialogTitle>
          <VisuallyHidden.Root>
            <Dialog.Description>Edit start page settings</Dialog.Description>
          </VisuallyHidden.Root>
          <DialogSection>
            <DialogSectionHeader>
              <DialogSectionTitle>Rows</DialogSectionTitle>
              <GenericButton onClick={() => addRow()}>
                <SlPlus size={18} />
                <span>Add row</span>
              </GenericButton>
            </DialogSectionHeader>
            <DialogSectionList>
              {Object.entries(linksPanel).map(([rowName, row]) => (
                <li key={rowName}>
                  <span>{rowName}</span>
                  <RowControls
                    toggleRowVisibility={toggleRowVisibility}
                    isHidden={row.isHidden}
                    handleRemoveRow={removeRow}
                    rowName={rowName}
                  />
                </li>
              ))}
            </DialogSectionList>
          </DialogSection>
        </SettingsContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
