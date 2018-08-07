import React from 'react';
import { Field } from 'redux-form';

import renderField from './RenderField';

import './styles.css';

const SignUpAudience = () => {
  return (
    <form>
      <h1>Audience Owner Sign Up</h1>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />
      <Field name="email" type="email" component={renderField} label="Email" />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
      />
      <Field
        name="passwordConformation"
        type="password"
        component={renderField}
        label="Password Conformation"
      />
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SignUpAudience;
