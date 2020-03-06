import { compose, tokens } from 'classy-ui';

export const baseButton = disabled =>
  compose(
    tokens.backgroundColor.PRIMARY,
    tokens.padding.SPACING_2,
    tokens.borderStyle.SOLID
  );

export const primaryButton = disabled => compose(baseButton(disabled));
export const linkButton = baseButton(false);
