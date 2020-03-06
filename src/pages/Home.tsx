import React from 'react';
import { LinkButton } from '../ds/react/Buttons';
const Home = ({}) => {
  const data = localStorage.getItem('forms');
  let forms;
  forms = data ? JSON.parse(data) : [];
  return (
    <div>
      <h1>Forms</h1>

      <LinkButton to="/create-form">Create form</LinkButton>
      <Forms forms={forms} />
    </div>
  );
};

const Forms = ({ forms }: { forms: any }) => {
  return (
    <div>
      {forms.map((form: any, index: any) =>
        form ? (
          <LinkButton key={index} to={`/create-form/${index}`}>
            {form.name}
          </LinkButton>
        ) : null
      )}
    </div>
  );
};

export default Home;
