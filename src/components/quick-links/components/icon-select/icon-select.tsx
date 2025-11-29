import { Icon } from '@components/icon';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useDebounce } from '@shared/hooks';
import { IQuickLink } from '@shared/interfaces';
import { useFormikContext } from 'formik';
import { ReactElement, useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import * as icons from 'react-icons/fa6';

import {
  IconDialogHeader,
} from './styles';

const iconsList = Object.entries(icons);

interface IProps {
  isOpen: boolean;
  handleClose: () => void;
}

export const IconSelect = ({ isOpen, handleClose }: IProps): ReactElement => {
  const [filteredIcons, setFilteredIcons] = useState<[string, IconType][]>(iconsList);
  const [searchString, setSearchString] = useState<string>('');
  const formik = useFormikContext<IQuickLink>();

  const debouncedSearchString = useDebounce<string>(searchString, 300);

  useEffect(() => {
    if (!debouncedSearchString) {
      setFilteredIcons(iconsList);

      return;
    }

    const filtered = iconsList.filter(([iconName]) =>
      iconName.toLowerCase().includes(debouncedSearchString.toLowerCase()),
    );
    setFilteredIcons(filtered);
  }, [debouncedSearchString]);

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogContent>
        <IconDialogHeader>
          <TextField
            fullWidth={true}
            value={searchString}
            size="small"
            label="search"
            sx={{ mb: 2 }}
            onChange={e => setSearchString(e.target.value)}
          />
        </IconDialogHeader>
        <Grid container spacing={1}>
          {filteredIcons.map(([name]) => (
            <Grid key={name}>
              <Button
                onClick={async () => {
                  await formik.setFieldValue('iconName', name);
                  handleClose();
                }}
                startIcon={<Icon.FaIcon iconName={name}/>}
              >
                <Typography>{name.slice(2)}</Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
