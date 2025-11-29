import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { IServiceItem } from '@shared/interfaces';
import type { ReactElement } from 'react';

import { ServicesItem } from './styles';

type Tab = chrome.tabs.Tab;

interface IProps {
  item: IServiceItem;
  isMoviePage: boolean;
  activeTab: Tab;
}

export const ServiceItem = ({
  activeTab,
  item: { name, css, replaceValue, replaceTarget },
  isMoviePage,
}: IProps): ReactElement => {
  const handleOpen = async (): Promise<void> => {
    const url = activeTab.url.replace(replaceTarget, replaceValue);

    await chrome.tabs.create({ url });
  };

  const handleInjectStyles = async (): Promise<void> => {
    await chrome.scripting.insertCSS({
      css,
      target: {
        tabId: activeTab.id,
      },
    });
  };

  return (
    <ServicesItem>
      <Typography sx={{ mr: 'auto' }} variant="body1">{name}</Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" size="small" disabled={!isMoviePage} onClick={handleOpen}>
          Open
        </Button>
        <Button size="small" color="info" onClick={handleInjectStyles}>
          Inject
        </Button>
      </Stack>
    </ServicesItem>
  );
};
