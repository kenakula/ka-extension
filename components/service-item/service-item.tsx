import { Button } from '@components/button/button';
import type { IServiceItem } from '@shared/interfaces';
import type { ReactElement } from 'react';

import { ServiceControls, ServiceName, ServicesItem } from './styles';

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
      <ServiceName>{name}</ServiceName>
      <ServiceControls>
        <Button isDisabled={!isMoviePage} onClick={handleOpen}>
          Open
        </Button>
        <Button variant="secondary" onClick={handleInjectStyles}>
          Inject
        </Button>
      </ServiceControls>
    </ServicesItem>
  );
};
