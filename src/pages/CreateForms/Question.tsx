import React from 'react';
import { Options, TextInput } from '../../ds/react/FormElements';
import { Card } from '../../ds/react/Card';
import { PrimaryButton } from '../../ds/react/Buttons';

export const Question = ({
  question,
  setQuestion
}: {
  question: Question;
  setQuestion: Function;
}) => {
  const nameChange = (name: string) => {
    setQuestion({ ...question, name });
  };
  const typeChange = (type: string) => {
    setQuestion({
      ...question,
      type
    });
  };

  const setOptions = (options: string[]) => {
    setQuestion({ ...question, options });
  };
  return (
    <Card>
      <TextInput
        label="Question name"
        value={question.name}
        onChange={nameChange}
        validation={(value: string): string => {
          return value ? '' : 'Field required';
        }}
      />
      <Options
        selected={question.type}
        name="Question type"
        options={[
          QuestionType.Text,
          QuestionType.Number,
          QuestionType.Radiobuttons,
          QuestionType.Checkboxes,
          QuestionType.Dropdown
        ]}
        onChange={typeChange}
      />
      {questionsHasOptions(question) && (
        <QuestionOptions setOptions={setOptions} options={question.options} />
      )}
    </Card>
  );
};

const QuestionOptions = ({
  options,
  setOptions
}: {
  options: string[];
  setOptions: Function;
}) => {
  const setOption = (index: number) => {
    return (option: string) => {
      options[index] = option;
      setOptions([...options]);
    };
  };

  const addOption = () => {
    setOptions([...options, 'Undefined options']);
  };
  return (
    <div>
      {options.map((option, index) => (
        <TextInput
          key={index}
          label={`Option ${index + 1}`}
          value={option}
          onChange={setOption(index)}
          required={true}
        />
      ))}
      <PrimaryButton onClick={addOption}>Add option</PrimaryButton>
    </div>
  );
};

export interface Question {
  name: string;
  type: QuestionType;
  required?: boolean;
  options: string[];
}

export type QuestionType =
  | 'Text'
  | 'Number'
  | 'Radiobuttons'
  | 'Checkboxes'
  | 'Dropdown';

export const QuestionType = {
  Text: 'Text' as QuestionType,
  Number: 'Number' as QuestionType,
  Radiobuttons: 'Radiobuttons' as QuestionType,
  Checkboxes: 'Checkboxes' as QuestionType,
  Dropdown: 'Dropdown' as QuestionType
};

const questionsHasOptions = (question: Question) => {
  const type = question.type;
  return (
    type === QuestionType.Dropdown ||
    type === QuestionType.Radiobuttons ||
    type === QuestionType.Checkboxes
  );
};
