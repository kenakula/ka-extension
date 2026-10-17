export interface IServiceItem {
  name: string;
  replaceTarget: string;
  replaceValue: string;
  css: string;
  deprecated?: boolean;
}

export interface IQuickLink {
  id: string;
  url: string;
  rowId: string;
  label?: string;
  iconLink?: string;
  iconName?: string;
  iconColor?: string;
  useCustomIcon?: boolean;
}

export interface IQuickLinksRow {
  id: string;
  name: string;
  isHidden: boolean;
  links: IQuickLink[];
}

export type TQuickLinksPanel = Record<
  string,
  { links: IQuickLink[]; isHidden: boolean; id: string }
>;
