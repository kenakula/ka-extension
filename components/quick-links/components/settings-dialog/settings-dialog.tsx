import Drawer from '@mui/material/Drawer';
import { TQuickLinksPanel } from '@shared/interfaces';
import { ReactElement } from 'react';
import { SlPlus } from 'react-icons/sl';

import { RowControls } from './row-controls';
import {
  SettingsSectionHeader,
  SettingsSectionList,
  SettingsSectionTitle,
} from './styles';

interface IProps {
  handleClose: () => void;
  isOpen: boolean;
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
  isOpen,
  handleClose,
}: IProps): ReactElement => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={handleClose}>
      <h3>Settings</h3>
      <div>
        <SettingsSectionHeader>
          <SettingsSectionTitle>Rows</SettingsSectionTitle>
          <button type="button" onClick={() => addRow()}>
            <SlPlus size={18}/>
            <span>Add row</span>
          </button>
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
      </div>
    </Drawer>
  );
};
