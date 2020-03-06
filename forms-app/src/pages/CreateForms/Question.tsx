import React from 'react';
import { Options, TextInput } from '../../ds/react/FormElements';
import { Card } from '../../ds/react/Card';

export const Question = ({
  question,
  setQuestion
}: {
  question: Question;
  setQuestion: Function;
}) => {
  const nameChange = (name: string) => {
    setQuestion({ name: name, type: question.type });
  };
  const typeChange = (type: string) => {
    setQuestion({
      name: question.name,
      type: type
    });
  };
  return (
    <Card>
      <TextInput
        label="Question name"
        value={question.name}
        onChange={nameChange}
        validation={(value: string): string => {
          console.log('validationg');
          return value ? '' : 'Field required';
        }}
      />
      <div>
        <Options
          selected={question.type}
          name="Question type"
          options={[QuestionType.Text, QuestionType.MultiSelect]}
          onChange={typeChange}
        />
      </div>
    </Card>
  );
};

export interface Question {
  name: string;
  type: QuestionType;
  required?: boolean;
}

export type QuestionType = 'text' | 'multi';

export const QuestionType = {
  Text: 'Text' as QuestionType,
  MultiSelect: 'Multi Select' as QuestionType
};
