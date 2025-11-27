import { ReactElement } from 'react';
import * as icons from 'react-icons/fa6';

interface IFaIconProps {
  iconName: string;
  size?: number;
}

export const FaIcon = ({ iconName, size = 28 }: IFaIconProps): ReactElement => {
  const IconComponent = iconName ? icons[iconName] : null;

  return <IconComponent size={size} />;
};

export const Icon = {
  FaIcon,
};
