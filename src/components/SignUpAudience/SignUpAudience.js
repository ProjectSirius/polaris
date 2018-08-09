import React from 'react';
import { Field } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import renderField from './RenderField';

import './styles.css';

const SignUpAudience = ({
  signUp,
  handleSubmit,
  isSignUp,
  location,
  valid,
}) => {
  const { from } = location.state || { from: { pathname: '/login' } };

  return isSignUp ? (
    <Redirect to={from} />
  ) : (
    <div className="sign-up-form">
      <form onSubmit={handleSubmit(signUp)}>
        <h1>Audience Owner Sign Up</h1>
        <Field
          name="username"
          type="text"
          component={renderField}
          placeholder="Username"
          bsSize="large"
          className="input"
        />
        <Field
          name="email"
          type="email"
          component={renderField}
          placeholder="Email"
          bsSize="large"
          className="input"
        />
        <Field
          name="password"
          type="password"
          component={renderField}
          placeholder="Password"
          bsSize="large"
          className="input"
        />
        <Field
          name="passwordConformation"
          type="password"
          component={renderField}
          placeholder="Password Conformation"
          bsSize="large"
          className="input"
        />
        <Field
          name="userType"
          type="hidden"
          component={renderField}
          className="hidden-input"
        />
        <div>
          <Button
            bsStyle=""
            bsSize="large"
            block
            type="submit"
            disabled={!valid}
            className="button"
          >
            CREATE ACCOUNT!
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpAudience;
