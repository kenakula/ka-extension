import { SettingsRow } from '@components/quick-links/components/settings-dialog/settings-row';
import { useQuickLinks } from '@components/quick-links/quick-links-context';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { IQuickLinksRow } from '@shared/interfaces';
import { ReactElement } from 'react';

import {
  SettingsContainer,
  SettingsSectionHeader,
} from './styles';

interface IProps {
  isOpen: boolean;
  linksRows: IQuickLinksRow[];
  handleClose: () => void;
}

export const SettingsDialog = ({
  linksRows,
  isOpen,
  handleClose,
}: IProps): ReactElement => {
  const { handleAddRow } = useQuickLinks();

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
            {linksRows.map(({ name, isHidden, id }) => (
              <SettingsRow
                key={id}
                id={id}
                isHidden={isHidden}
                setName={name}
              />
            ))}
          </Stack>
        </Box>
      </SettingsContainer>
    </Drawer>
  );
};
