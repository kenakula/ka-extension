import type { MouseEventHandler, PropsWithChildren, ReactElement } from "react";
import { PrimaryButton, SecondaryButton } from "./styles";

interface IProps extends PropsWithChildren {
  isDisabled?: boolean;
  variant?: 'primary' | 'secondary';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({children, onClick, isDisabled = false, variant = 'primary', type = 'button'}: IProps): ReactElement => {
  const Component = variant === 'primary' ? PrimaryButton : SecondaryButton;

  return (
    <Component disabled={isDisabled} onClick={onClick} type={type}>{children}</Component>
  )
}