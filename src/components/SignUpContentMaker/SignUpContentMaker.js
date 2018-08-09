import React from 'react';
import { Field } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import renderField from './RenderField';

import './styles.css';

const SignUpContentMaker = ({
  signUp,
  handleSubmit,
  isSignUp,
  location,
  valid,
  isSignUpRequesting,
}) => {
  const { from } = location.state || { from: { pathname: '/login' } };

  return isSignUp ? (
    <Redirect to={from} />
  ) : (
    <div className="content-owner-sign-up-form">
      <form onSubmit={handleSubmit(signUp)}>
        <h1>Sign Up Content Maker</h1>
        <Field
          name="username"
          type="text"
          component={renderField}
          placeholder="Username"
          bsSize="large"
          className="content-owner-input"
        />
        <Field
          name="email"
          type="email"
          component={renderField}
          placeholder="Email"
          bsSize="large"
          className="content-owner-input"
        />
        <Field
          name="password"
          type="password"
          component={renderField}
          placeholder="Password"
          bsSize="large"
          className="content-owner-input"
        />
        <Field
          name="passwordConformation"
          type="password"
          component={renderField}
          placeholder="Password Conformation"
          bsSize="large"
          className="content-owner-input"
        />
        <Field
          name="userType"
          type="hidden"
          component={renderField}
          className="content-owner-hidden-input"
        />
        <div className="message">
          {isSignUpRequesting && <div>Please wait...</div>}
        </div>
        <div>
          <Button
            bsStyle=""
            block
            disabled={!valid || isSignUpRequesting}
            type="submit"
            bsSize="large"
            className="content-owner-button"
          >
            CREATE ACCOUNT!
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpContentMaker;
