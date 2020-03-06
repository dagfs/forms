import { compose, tokens } from 'classy-ui';

export const baseButton = (disabled: Boolean) =>
  compose(
    tokens.backgroundColor.PRIMARY,
    tokens.padding.SPACING_2,
    tokens.borderStyle.SOLID
  );

export const primaryButton = (disabled: Boolean) =>
  compose(baseButton(disabled));
export const linkButton = baseButton(false);
