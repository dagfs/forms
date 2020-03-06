import React, { useState } from 'react';
import { TextInput, Options } from '../../ds/react/FormElements';
import { PrimaryButton } from '../../ds/react/Buttons';
import { Question, QuestionType } from './Question';

const CreateForm = (props: any) => {
  const formIndex = props.match.params.formIndex;

  const [formName, setFormName] = useState('Default');
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { name: 'Untitled Question', type: QuestionType.Text, options: [] }
    ]);
  };

  if (questions.length === 0) {
    const forms = localStorage.getItem('forms');
    let form;
    if (forms) {
      const data = JSON.parse(forms);
      form = data.length >= formIndex ? data[formIndex] : undefined;
    }
    if (!form) {
      addQuestion();
    } else {
      setFormName(form.name);
      setQuestions(form.questions);
    }
  }

  const save = () => {
    let json = localStorage.getItem('forms');
    let forms = json ? JSON.parse(json) : [];
    if (formIndex) {
      forms[formIndex] = { name: formName, questions };
      localStorage.setItem('forms', JSON.stringify([...forms]));
    } else {
      localStorage.setItem(
        'forms',
        JSON.stringify([{ name: formName, questions }])
      );
    }
  };
  return (
    <div>
      <FormName formName={formName} setFormName={setFormName} />
      <Questions questions={questions} setQuestions={setQuestions} />
      <PrimaryButton onClick={addQuestion}>Add question</PrimaryButton>
      <PrimaryButton onClick={save}>save</PrimaryButton>
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
