import React from "react";
import { compose, tokens } from "classy-ui";
import { PrimaryButton } from "@dagfs/design-system/react/PrimaryButton";

function App() {
  return (
    <div>
      <h1 className={compose(tokens.backgroundColor.RED)}>Hello, World!</h1>
      <PrimaryButton>Hello</PrimaryButton>
    </div>
  );
}

export default App;
