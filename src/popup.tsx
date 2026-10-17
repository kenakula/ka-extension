import '@app/styles/popup.css';

import { PopupGlobalStyles } from '@app/styles';
import { Container } from '@app/styles/popup.styles';
import { theme } from '@app/theme/theme';
import { ServiceItem } from '@components/service-item';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { SERVICES_LIST } from '@shared/constants';
import { ReactElement, useEffect, useState } from 'react';

type Tab = chrome.tabs.Tab;

const Popup = (): ReactElement => {
  const [activeTab, setActiveTab] = useState<Tab>();
  const [isMoviePage, setIsMoviePage] = useState<boolean>();

  const getActiveTab = async (): Promise<void> => {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    if (tab) {
      setActiveTab(tab);
    }
  };

  const validateTabUrl = (): void => {
    if (!activeTab?.url) return;

    const isMoviePage = [
      'kinopoisk.ru/film/',
      'kinopoisk.ru/series/',
    ].some(url => activeTab.url.includes(url));

    setIsMoviePage(isMoviePage);
  };

  useEffect(validateTabUrl, [activeTab]);
  useEffect(() => {
    getActiveTab();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <PopupGlobalStyles/>
      <Container>
        <Stack sx={{ width: '100%', justifyContent: 'center' }} divider={<Divider/>}>
          {SERVICES_LIST.filter(item => !item.deprecated).map((item) => (
            <ServiceItem
              activeTab={activeTab}
              item={item}
              key={item.name}
              isMoviePage={isMoviePage}
            />
          ))}
        </Stack>
      </Container>
    </ThemeProvider>
  );
};

export default Popup;
