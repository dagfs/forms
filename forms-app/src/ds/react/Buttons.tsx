import React, { ReactChildren } from 'react';
import { Link } from 'react-router-dom';
import { linkButton, primaryButton } from '../compositions/buttons';

export type LinkButtonProps = {
  children: string;
  disabled?: boolean;
  to: string;
};
export const LinkButton = ({ children, disabled, to }: LinkButtonProps) => (
  <Link className={linkButton} to={to}>
    {children}
  </Link>
);

export type PrimaryButtonProps = {
  children: string | ReactChildren;
  disabled?: boolean;
  onClick: Function;
};
export const PrimaryButton = ({
  children,
  disabled,
  onClick
}: PrimaryButtonProps) => {
  const click = () => {
    onClick();
  };
  return (
    <button type="button" onClick={click} className={primaryButton(disabled)}>
      {children}
    </button>
  );
};
