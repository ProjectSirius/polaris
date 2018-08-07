import React from 'react';
import { Field } from 'redux-form';
import { Redirect } from 'react-router-dom';

import renderField from './RenderField';

import './styles.css';

const SignUpAudience = ({ signUp, handleSubmit, isSignUp, location }) => {
  const { from } = location.state || { from: { pathname: '/login' } };

  return isSignUp ? (
    <Redirect to={from} />
  ) : (
    <form onSubmit={handleSubmit(signUp)}>
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
      <Field name="userType" type="hidden" component={renderField} />
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SignUpAudience;
