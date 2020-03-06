import React, { useState } from 'react';
import { TextInput } from '../ds/react/FormElements';
import { PrimaryButton } from '../ds/react/Buttons';

const CreateForm = () => {
  const [formName, setFormName] = useState('Default');
  const [questions, setQuestions] = useState([]);
  const addQuestion = () => {
    const updatedQuestions = [
      ...questions,
      { name: '', type: QuestionType.Text }
    ];
    setQuestions(updatedQuestions);
  };
  return (
    <div>
      <FormName formName={formName} setFormName={setFormName} />
      <Questions questions={questions} setQuestions={setQuestions} />
      <PrimaryButton onClick={addQuestion}>Add question</PrimaryButton>
    </div>
  );
};

const FormName = ({
  formName,
  setFormName
}: {
  formName: string;
  setFormName: Function;
}) => (
  <div>
    <h2>{formName}</h2>
    <TextInput
      label="Form name"
      onChange={setFormName}
      value={formName}
    ></TextInput>
  </div>
);

const Questions = ({
  questions,
  setQuestions
}: {
  questions: Question[];
  setQuestions: Function;
}) => {
  return (
    <div>
      {questions.map((question, key) => (
        <Question key={key} {...question} />
      ))}
    </div>
  );
};

const Question = ({ name, type, required }: Question) => {
  const nameChange = (name: string) => {
    console.log(name);
  };
  return (
    <div>
      <TextInput label="Question name" value={name} onChange={nameChange} />
      <h3>{name}</h3>
      <h3>{type}</h3>
    </div>
  );
};

const Options = ({
  name,
  options,
  onChange
}: {
  name: string;
  options: [];
  onChange: Function;
}) => {
  const change = (event: any) => {
    onChange(event.target.value);
  };
  return (
    <label>
      {name}
      <select onChange={change}>
        {options.map(option => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </label>
  );
};

interface Question {
  name: string;
  type: QuestionType;
  required?: boolean;
}

type QuestionType = 'text' | 'multi';

const QuestionType = {
  Text: 'Text' as QuestionType,
  MultiSelect: 'Multi Select' as QuestionType
};

export default CreateForm;
