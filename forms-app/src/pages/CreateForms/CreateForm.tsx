import React, { useState } from 'react';
import { TextInput, Options } from '../../ds/react/FormElements';
import { PrimaryButton } from '../../ds/react/Buttons';
import { Question, QuestionType } from './Question';

const CreateForm = () => {
  const [formName, setFormName] = useState('Default');
  const [questions, setQuestions] = useState([]);
  const addQuestion = () => {
    setQuestions([
      ...questions,
      { name: 'Untitled Question', type: QuestionType.Text }
    ]);
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
  const setQuestion = (index: number) => {
    return (question: Question) => {
      questions[index] = question;
      setQuestions([...questions]);
    };
  };
  return (
    <div>
      {questions.map((question, index) => (
        <Question
          key={index}
          setQuestion={setQuestion(index)}
          question={question}
        />
      ))}
    </div>
  );
};

export default CreateForm;
