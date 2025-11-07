export interface IServiceItem {
  name: string;
  replaceTarget: string;
  replaceValue: string;
  stylesFile: string;
  css: string;
}

export interface IQuickLink {
  url: string;
  label?: string;
  iconLink?: string;
  iconName?: string;
  useCustomIcon?: boolean;
}