import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { NewTabContainer, NewTabGlobalStyles } from '@app/styles';
import { theme } from '@app/theme/theme';
import { Clock } from '@components/clock';
import { QuickLinks } from '@components/quick-links';
import { QuickLinksProvider } from '@components/quick-links/quick-links-context';
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
        <NewTabGlobalStyles/>
        <Clock/>
        <QuickLinksProvider>
          <QuickLinks/>
        </QuickLinksProvider>
      </NewTabContainer>
    </ThemeProvider>
  );
};

export default NewTab;
