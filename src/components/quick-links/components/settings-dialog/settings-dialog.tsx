import { SettingsRow } from '@components/quick-links/components/settings-dialog/settings-row';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { TQuickLinksPanel } from '@shared/interfaces';
import { ReactElement } from 'react';

import {
  SettingsContainer,
  SettingsSectionHeader,
} from './styles';

interface IProps {
  handleClose: () => void;
  isOpen: boolean;
  addRow: (rowName?: string) => void;
  removeRow: (rowName: string) => void;
  linksPanel: TQuickLinksPanel;
  toggleRowVisibility: (rowName: string) => void;
  handleRenameRow: (rowName: string, newName: string) => void;
}

export const SettingsDialog = ({
  addRow,
  removeRow,
  linksPanel,
  toggleRowVisibility,
  isOpen,
  handleClose,
  handleRenameRow,
}: IProps): ReactElement => {
  const handleAddRow = (): void => {
    addRow();
  };

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={handleClose}
      slotProps={{ paper: () => ({ style: { width: 350 } }) }}
    >
      <SettingsContainer>
        <Typography mb={2} variant="h2">Settings</Typography>
        <Box>
          <SettingsSectionHeader>
            <Typography variant="h4">Rows</Typography>
            <Button type="button" onClick={handleAddRow} startIcon={<AddIcon/>}>
              Add row
            </Button>
          </SettingsSectionHeader>
          <Stack divider={<Divider orientation="horizontal" flexItem/>}>
            {Object.entries(linksPanel).map(([setName, row]) => (
              <SettingsRow
                key={setName}
                handleRenameRow={handleRenameRow}
                toggleRowVisibility={toggleRowVisibility}
                isHidden={row.isHidden}
                handleRemoveRow={removeRow}
                setName={setName}
              />
            ))}
          </Stack>
        </Box>
      </SettingsContainer>
    </Drawer>
  );
};
