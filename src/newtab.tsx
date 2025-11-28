import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { GlobalStyles, NewTabContainer } from '@app/styles';
import { theme } from '@app/theme/theme';
import { Clock } from '@components/clock';
import { QuickLinks } from '@components/quick-links';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import React, { ReactElement, useLayoutEffect } from 'react';

const NewTab = (): ReactElement => {
  useLayoutEffect(() => {
    document.title = 'New Tab';
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NewTabContainer>
        <CssBaseline/>
        <GlobalStyles/>
        <Clock/>
        <QuickLinks/>
      </NewTabContainer>
    </ThemeProvider>
  );
};

export default NewTab;
