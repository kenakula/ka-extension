import { IQuickLinksRow } from '@shared/interfaces';
import { getId } from '@shared/utils';

export const DEFAULT_SET_NAME = 'default';
export const DEFAULT_SET_ID = 'defaultListIdUnique';

export const QUICK_LINKS_LISTS: IQuickLinksRow[] = [
  {
    id: DEFAULT_SET_ID,
    name: DEFAULT_SET_NAME,
    isHidden: false,
    links: [
      {
        id: getId(),
        rowId: DEFAULT_SET_ID,
        url: 'https://yandex.ru/maps',
        label: '',
        iconLink: '',
        iconName: '',
        useCustomIcon: false,
      },
      {
        id: getId(),
        rowId: DEFAULT_SET_ID,
        url: 'https://kinopoisk.ru',
        label: '',
        iconLink: '',
        iconName: '',
        useCustomIcon: false,
      },
      {
        id: getId(),
        rowId: DEFAULT_SET_ID,
        url: 'https://youtube.com',
        label: '',
        iconLink: '',
        iconName: '',
        useCustomIcon: false,
      },
      {
        id: getId(),
        rowId: DEFAULT_SET_ID,
        url: 'https://yandex.ru/pogoda/ru/saint-petersburg',
        label: '',
        iconLink: '',
        iconName: '',
        useCustomIcon: false,
      },
    ],
  },
];