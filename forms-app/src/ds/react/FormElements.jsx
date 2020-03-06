import React from "react";

const InputElement = ({ type, label, onChange, value }) => {
  const change = event => {
    onChange(event.target.value);
  };
  return (
    <label>
      {label}
      <input type={type} onChange={change} value={value} />
    </label>
  );
};

export const TextInput = ({ label, onChange, value }) => {
  return (
    <InputElement
      type="text"
      onChange={onChange}
      label={label}
      value={value}
    ></InputElement>
  );
};
