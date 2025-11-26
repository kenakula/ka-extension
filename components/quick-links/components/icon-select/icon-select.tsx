import { Dialog, DialogTitle } from '@components/dialog';
import { Icon } from '@components/icon';
import { Button } from '@radix-ui/themes';
import { useDebounce } from '@shared/hooks';
import { IQuickLink } from '@shared/interfaces';
import { useFormikContext } from 'formik';
import { RadioGroup, VisuallyHidden } from 'radix-ui';
import { ReactElement, useEffect, useState, useTransition } from 'react';
import { IconType } from 'react-icons';
import * as icons from 'react-icons/fa6';

import {
  IconDialogContent,
  IconDialogHeader,
  RadioIndicator,
  RadioItem,
} from './styles';

const iconsList = Object.entries(icons);

interface IProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const IconSelect = ({ isOpen, onOpenChange }: IProps): ReactElement => {
  const [filteredIcons, setFilteredIcons] =
    useState<[string, IconType][]>(iconsList);
  const [searchString, setSearchString] = useState<string>('');
  const [iconColor, setIconColor] = useState('aliceblue');
  const formik = useFormikContext<IQuickLink>();

  const [isTransitioning, startTransition] = useTransition();

  const debouncedSearchString = useDebounce<string>(searchString, 300);

  const handleColorValueChange = async (value: string): Promise<void> => {
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
    <Dialog isOpen={isOpen} onOpenChange={onOpenChange}>
      <IconDialogContent>
        <IconDialogHeader>
          <VisuallyHidden.Root>
            <DialogTitle>Select icon</DialogTitle>
          </VisuallyHidden.Root>
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
            <RadioGroup.Root onValueChange={handleColorValueChange}>
              <RadioItem value="aliceblue">
                <RadioIndicator/>
              </RadioItem>
              <RadioItem value="red">
                <RadioIndicator/>
              </RadioItem>
              <RadioItem value="blue">
                <RadioIndicator/>
              </RadioItem>
            </RadioGroup.Root>
          </div>
        </IconDialogHeader>
        {isTransitioning ? (
          <span>Loading ...</span>
        ) : (
          <ul>
            {filteredIcons.map(([name]) => (
              <li key={name}>
                <Button
                  type="button"
                  style={{ color: iconColor }}
                  onClick={async () => {
                    await formik.setFieldValue('iconName', name);
                    onOpenChange(false);
                  }}
                >
                  <Icon.FaIcon iconName={name}/>
                  <span>{name.slice(2)}</span>
                </Button>
              </li>
            ))}
          </ul>
        )}
      </IconDialogContent>
    </Dialog>
  );
};
