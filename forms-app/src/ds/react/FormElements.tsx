import React, { ReactElement } from 'react';

interface InputElementProps {
  type: string;
  label: string;
  onChange: Function;
  value: string | number;
}

const InputElement = ({
  type,
  label,
  onChange,
  value
}: InputElementProps): ReactElement => {
  const change = (event: any) => {
    onChange(event.target.value);
  };
  return (
    <label>
      {label}
      <input type={type} onChange={change} value={value} />
    </label>
  );
};

type TextInputProps = {
  label: string;
  onChange: Function;
  value: string | number;
};
export const TextInput = ({ label, onChange, value }: TextInputProps) => {
  return (
    <InputElement
      type="text"
      onChange={onChange}
      label={label}
      value={value}
    ></InputElement>
  );
};
