import { Clock } from '@components/clock';
import { QuickLinks } from '@components/quick-links';
import { GlobalStyles, NewTabContainer } from '@shared/styles';
import { ReactElement, useLayoutEffect } from 'react';

const NewTab = (): ReactElement => {
  useLayoutEffect(() => {
    document.title = 'New Tab';
  }, []);

  return (
    <NewTabContainer>
      <GlobalStyles />
      <Clock />
      <QuickLinks />
    </NewTabContainer>
  );
};

export default NewTab;
