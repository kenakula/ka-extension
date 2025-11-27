import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { GlobalStyles, NewTabContainer } from '@app/styles';
import { Clock } from '@components/clock';
import { QuickLinks } from '@components/quick-links';
import { ReactElement, useLayoutEffect } from 'react';

const NewTab = (): ReactElement => {
  useLayoutEffect(() => {
    document.title = 'New Tab';
  }, []);

  return (
    <NewTabContainer>
      <GlobalStyles/>
      <Clock/>
      <QuickLinks/>
    </NewTabContainer>
  );
};

export default NewTab;
