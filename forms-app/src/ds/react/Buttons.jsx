import React from "react";
import { Link } from "react-router-dom";
import { linkButton, primaryButton } from "../compositions/buttons";

export const LinkButton = ({ children, disabled, to }) => (
  <Link className={linkButton} to={to}>
    {children}
  </Link>
);

export const PrimaryButton = ({ children, disabled }) => (
  <button className={primaryButton(disabled)}>{children}</button>
);
