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

export type PrimaryButtonProps = { children: ReactChildren; disabled: boolean };
export const PrimaryButton = ({ children, disabled }: PrimaryButtonProps) => (
  <button className={primaryButton(disabled)}>{children}</button>
);
