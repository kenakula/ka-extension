import { IQuickLink } from '@shared/interfaces';
import { getId } from '@shared/utils';

export const DEFAULT_VALUES: IQuickLink = {
  id: getId(),
  url: '',
  rowId: '',
  label: '',
  iconLink: '',
  iconName: '',
  useCustomIcon: false,
};
