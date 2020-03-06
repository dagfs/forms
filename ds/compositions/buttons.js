import { compose, tokens } from "classy-ui";

export const baseButton = disabled => compose(tokens.backgroundColor.RED);

export const primaryButton = disabled => compose(baseButton(disabled));
