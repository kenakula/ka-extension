import { Icon } from '@components/icon';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useDebounce } from '@shared/hooks';
import { IQuickLink } from '@shared/interfaces';
import { useFormikContext } from 'formik';
import { ChangeEvent, ReactElement, useEffect, useState, useTransition } from 'react';
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

  const [isTransitioning, startTransition] = useTransition();

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

    startTransition(() => {
      const filtered = iconsList.filter(([iconName]) =>
        iconName.toLowerCase().includes(debouncedSearchString.toLowerCase()),
      );
      setFilteredIcons(filtered);
    });
  }, [debouncedSearchString]);

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogContent>
        <IconDialogHeader>
          <label>
            search
            <input
              type="text"
              value={searchString}
              onInput={(e) => {
                setSearchString(e.currentTarget.value);
              }}
            />
          </label>
          <div>
            <span>Choose color</span>
            <FormControl>
              <RadioGroup row name="icon-color" value={iconColor} onChange={handleChange}>
                <FormControlLabel control={<Radio/>} label="aliceblue" value="aliceblue"/>
                <FormControlLabel control={<Radio/>} label="red" value="red"/>
                <FormControlLabel control={<Radio/>} label="blue" value="blue"/>
              </RadioGroup>
            </FormControl>
          </div>
        </IconDialogHeader>
        {isTransitioning ? (
          <span>Loading ...</span>
        ) : (
          <ul>
            {filteredIcons.map(([name]) => (
              <li key={name}>
                <button
                  type="button"
                  style={{ color: iconColor }}
                  onClick={async () => {
                    await formik.setFieldValue('iconName', name);
                    handleClose();
                  }}
                >
                  <Icon.FaIcon iconName={name}/>
                  <span>{name.slice(2)}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </DialogContent>
    </Dialog>
  );
};
