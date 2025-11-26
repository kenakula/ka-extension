import '@radix-ui/themes/styles.css';

import { Clock } from '@components/clock';
import { QuickLinks } from '@components/quick-links';
import { Theme } from '@radix-ui/themes';
import { GlobalStyles, NewTabContainer } from '@shared/styles';
import { ReactElement, useLayoutEffect } from 'react';

const NewTab = (): ReactElement => {
  useLayoutEffect(() => {
    document.title = 'New Tab';
  }, []);

  return (
    <Theme accentColor="violet" grayColor="sage" appearance="dark" hasBackground={false}>
      <NewTabContainer>
        <GlobalStyles/>
        <Clock/>
        <QuickLinks/>
      </NewTabContainer>
    </Theme>
  );
};

export default NewTab;
