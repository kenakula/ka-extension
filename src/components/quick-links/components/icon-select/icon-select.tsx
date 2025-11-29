import { Icon } from '@components/icon';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useDebounce } from '@shared/hooks';
import { IQuickLink } from '@shared/interfaces';
import { useFormikContext } from 'formik';
import { ChangeEvent, ReactElement, useEffect, useState } from 'react';
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
  const [filteredIcons, setFilteredIcons] =
    useState<[string, IconType][]>(iconsList);
  const [searchString, setSearchString] = useState<string>('');
  const [iconColor, setIconColor] = useState('aliceblue');
  const formik = useFormikContext<IQuickLink>();

  const debouncedSearchString = useDebounce<string>(searchString, 300);

  const handleChange = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const value = event.target.value;
    setIconColor(value);
    await formik.setFieldValue('iconColor', value);
  };

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
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup row name="icon-color" value={iconColor} onChange={handleChange}>
              <FormControlLabel control={<Radio/>} label="aliceblue" value="aliceblue"/>
              <FormControlLabel control={<Radio/>} label="red" value="red"/>
              <FormControlLabel control={<Radio/>} label="blue" value="blue"/>
            </RadioGroup>
          </FormControl>
        </IconDialogHeader>
        <Grid container spacing={1}>
          {filteredIcons.map(([name]) => (
            <Grid key={name}>
              <Button
                style={{ color: iconColor }}
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
