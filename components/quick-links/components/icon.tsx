import * as icons from "react-icons/fa6";
import { ReactElement } from "react";

interface IProps {
  iconName: string;
  size?: number;
}

export const Icon = ({ iconName, size = 28 }: IProps): ReactElement => {
  const IconComponent = iconName ? icons[iconName] : null;

  return <IconComponent size={size} />;
};
