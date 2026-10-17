import { IQuickLinksRow, type IServiceItem } from '@shared/interfaces';
import { getId } from '@shared/utils';
import cxStyles from 'data-text:~styles/cx-style.css';
import ggStyles from 'data-text:~styles/gg-style.css';

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

export const SERVICES_LIST: IServiceItem[] = [
  {
    name: 'cx',
    replaceTarget: '.ru',
    replaceValue: '.cx',
    css: cxStyles,
  },
  {
    name: 'win',
    replaceTarget: 'kinopoisk.ru',
    replaceValue: 'kinokino.win',
    css: ggStyles,
  },
  {
    name: 'ws',
    replaceTarget: '.ru',
    replaceValue: '.ws',
    css: cxStyles,
  },
];