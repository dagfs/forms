import React, { ReactElement } from 'react';
import { useState } from 'react';
import { compose, tokens } from 'classy-ui';

interface InputElementProps {
  type: string;
  label: string;
  onChange: Function;
  validation?: (value: string | number) => string;
  value: string | number;
}

const InputElement = ({
  type,
  label,
  onChange,
  value,
  validation
}: InputElementProps): ReactElement => {
  const [showInput, setShowInput] = useState(false);
  const [error, setError] = useState('');

  const change = (event: any) => {
    const value = event.target.value;
    const err = validation ? validation(value) : '';
    setError(err);
    onChange(value);
  };
  return (
    <div>
      <label>
        {label}
        {showInput ? (
          <input
            className={compose(tokens.marginLeft.SPACING_2)}
            type={type}
            onChange={change}
            value={value}
            onBlur={() => {
              setShowInput(false);
            }}
          />
        ) : (
          <span
            className={compose(tokens.marginLeft.SPACING_2)}
            onClick={() => {
              setShowInput(true);
            }}
          >
            {value}
          </span>
        )}
      </label>
      {error && <div className={compose(tokens.color.PRIMARY)}>{error}</div>}
    </div>
  );
};

type TextInputProps = {
  label: string;
  onChange: Function;
  value: string | number;

  validation?: (value: string | number) => string;
};
export const TextInput = ({
  label,
  onChange,
  value,
  validation
}: TextInputProps) => {
  return (
    <InputElement
      type="text"
      onChange={onChange}
      label={label}
      value={value}
      validation={validation}
    ></InputElement>
  );
};

export interface OptionsType {
  name: string;
  options: string[];
  selected: string;
  onChange: Function;
}
export const Options = ({ name, options, selected, onChange }: OptionsType) => {
  const change = (event: any) => {
    onChange(event.target.value);
  };
  return (
    <label>
      {name}
      <select
        className={compose(tokens.marginLeft.SPACING_2)}
        onChange={change}
        defaultValue={selected}
      >
        {options.map((option, key) => (
          <option key={key} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
};
