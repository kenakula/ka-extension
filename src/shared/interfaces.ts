export interface IServiceItem {
  name: string;
  replaceTarget: string;
  replaceValue: string;
  stylesFile: string;
  css: string;
}

export interface IQuickLink {
  id: string;
  url: string;
  setName: string;
  label?: string;
  iconLink?: string;
  iconName?: string;
  iconColor?: string;
  useCustomIcon?: boolean;
}

export interface IQuickLinksSet {
  id: string;
  name: string;
  isHidden: boolean;
  links: IQuickLink[];
}

export type TQuickLinksPanel = Record<
  string,
  { links: IQuickLink[]; isHidden: boolean; id: string }
>;
