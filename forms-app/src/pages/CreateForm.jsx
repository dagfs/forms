import React, { useState } from "react";
import { TextInput } from "../ds/react/FormElements";

const CreateForm = ({}) => {
  const [formName, setFormName] = useState("Default");
  return (
    <div>
      <h2>{formName}</h2>
      <TextInput
        label="Form name"
        onChange={setFormName}
        value={formName}
      ></TextInput>
    </div>
  );
};

export default CreateForm;
