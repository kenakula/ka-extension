import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import { useDebounce } from '@shared/hooks';
import { IQuickLink } from '@shared/interfaces';
import { useFormikContext } from 'formik';
import { ReactElement, useCallback, useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import * as icons from 'react-icons/fa6';

import { IconsGrid } from './icons-grid';
import { DialogContentStyled } from './styles';
import { IconDialogHeader } from './styles';

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

  const handleChooseIcon = useCallback(async (name: string): Promise<void> => {
    await formik.setFieldValue('iconName', name);
    handleClose();
  }, []);

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
      <DialogContentStyled>
        <IconDialogHeader>
          <TextField
            fullWidth={true}
            value={searchString}
            size="small"
            label="search"
            sx={{ mb: 2 }}
            onInput={e => setSearchString((e.target as HTMLInputElement).value)}
          />
        </IconDialogHeader>
        <IconsGrid icons={filteredIcons} onClick={handleChooseIcon}/>
      </DialogContentStyled>
    </Dialog>
  );
};

