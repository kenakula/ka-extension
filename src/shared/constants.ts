import { IQuickLinksRow, type IServiceItem } from '@shared/interfaces';
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

export const SERVICES_LIST: IServiceItem[] = [
  {
    name: 'cx',
    replaceTarget: '.ru',
    replaceValue: '.cx',
    stylesFile: 'cx-style.css',
    css: '.page{max-width:75vw!important}',
  },
  {
    name: 'gg',
    replaceTarget: 'kinopoisk.ru',
    replaceValue: 'ggpoisk.ru',
    stylesFile: 'gg-style.css',
    // eslint-disable-next-line max-len
    css: 'body{display:flex;align-items:center;margin:0;padding:0;border:0;width:100%;height:100%;overflow:hidden;background-color:#2a3440}@media screen and (min-width:901px){.wrapper{width:100%;height:calc(100% - 200px)!important}}',
  },
];