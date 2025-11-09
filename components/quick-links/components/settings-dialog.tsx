import { ReactElement } from "react";
import {
  SettingsSectionHeader,
  SettingsSectionList,
  SettingsSectionTitle,
  GenericButton,
  SettingsButton,
  SettingsContent,
} from "../styles";
import { FiSettings } from "react-icons/fi";
import { VisuallyHidden } from "radix-ui";
import { TQuickLinksPanel } from "~shared/interfaces";
import { RowControls } from "./row-controls";
import { SlPlus } from "react-icons/sl";
import {
  Dialog,
  DialogDescription,
  DialogSection,
  DialogTitle,
} from "~components/dialog";

interface IProps {
  addRow: (rowName?: string) => void;
  removeRow: (rowName: string) => void;
  linksPanel: TQuickLinksPanel;
  toggleRowVisibility: (rowName: string) => void;
}

const TriggerButton = (): ReactElement => (
  <SettingsButton>
    <FiSettings size={36} />
  </SettingsButton>
);

export const SettingsDialog = ({
  addRow,
  removeRow,
  linksPanel,
  toggleRowVisibility,
}: IProps): ReactElement => {
  return (
    <Dialog trigger={TriggerButton}>
      <SettingsContent>
        <DialogTitle>Settings</DialogTitle>
        <VisuallyHidden.Root>
          <DialogDescription>Edit start page settings</DialogDescription>
        </VisuallyHidden.Root>
        <DialogSection>
          <SettingsSectionHeader>
            <SettingsSectionTitle>Rows</SettingsSectionTitle>
            <GenericButton onClick={() => addRow()}>
              <SlPlus size={18} />
              <span>Add row</span>
            </GenericButton>
          </SettingsSectionHeader>
          <SettingsSectionList>
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
          </SettingsSectionList>
        </DialogSection>
      </SettingsContent>
    </Dialog>
  );
};
