import { IQuickLinksSet, TQuickLinksPanel } from '@shared/interfaces';
import { getId } from '@shared/utils';

export const QUICK_LINKS_SETS: IQuickLinksSet[] = [
  {
    id: getId(),
    name: 'default',
    isHidden: false,
    links: [
      {
        id: getId(),
        setName: 'defaultSet',
        url: 'https://yandex.ru/maps',
        label: '',
        iconLink: '',
        iconName: '',
        useCustomIcon: false,
      },
      {
        id: getId(),
        setName: 'defaultSet',
        url: 'https://kinopoisk.ru',
        label: '',
        iconLink: '',
        iconName: '',
        useCustomIcon: false,
      },
      {
        id: getId(),
        setName: 'defaultSet',
        url: 'https://youtube.com',
        label: '',
        iconLink: '',
        iconName: '',
        useCustomIcon: false,
      },
      {
        id: getId(),
        setName: 'defaultSet',
        url: 'https://yandex.ru/pogoda/ru/saint-petersburg',
        label: '',
        iconLink: '',
        iconName: '',
        useCustomIcon: false,
      },
    ],
  },
];

export const DEFAULT_PANEL: TQuickLinksPanel = {
  defaultSet: {
    id: getId(),
    links: [
      {
        id: getId(),
        setName: 'defaultSet',
        url: 'https://yandex.ru/maps',
        label: '',
        iconLink: '',
        iconName: '',
        useCustomIcon: false,
      },
      {
        id: getId(),
        setName: 'defaultSet',
        url: 'https://kinopoisk.ru',
        label: '',
        iconLink: '',
        iconName: '',
        useCustomIcon: false,
      },
      {
        id: getId(),
        setName: 'defaultSet',
        url: 'https://youtube.com',
        label: '',
        iconLink: '',
        iconName: '',
        useCustomIcon: false,
      },
      {
        id: getId(),
        setName: 'defaultSet',
        url: 'https://yandex.ru/pogoda/ru/saint-petersburg',
        label: '',
        iconLink: '',
        iconName: '',
        useCustomIcon: false,
      },
    ],
    isHidden: false,
  },
};