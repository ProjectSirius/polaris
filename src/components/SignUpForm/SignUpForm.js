import React from 'react';
import { Field } from 'redux-form';
import { Redirect, Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

import renderField from './RenderField';
import SubmitBtn from '../SubmitBtn';

const SignUpForm = ({
  signUp,
  handleSubmit,
  isSignUp,
  location,
  valid,
  isRequesting,
  errorSignUp,
  classes,
  messages,
  formatMessage,
  user,
  lang,
}) => {
  const { from } = location.state || { from: { pathname: '/login' } };
  return isSignUp ? (
    <Redirect to={from} />
  ) : (
    <div className={classes.signUpForm}>
      <form onSubmit={handleSubmit(signUp)}>
        <h1 className={classes.signUpTitle}>
          {user === 'audience'
            ? formatMessage(messages.audience)
            : formatMessage(messages.content)}
          {' ' + formatMessage(messages.formTitle)}
        </h1>
        <Field
          name="username"
          type="text"
          component={renderField}
          placeholder="Username"
          bsSize="large"
          className={classes.input}
        />
        <Field
          name="email"
          type="email"
          component={renderField}
          placeholder="Email"
          bsSize="large"
          className={classes.input}
        />
        <Field
          name="password"
          type="password"
          component={renderField}
          placeholder="Password"
          bsSize="large"
          className={classes.input}
        />
        <Field
          name="passwordConfirmation"
          type="password"
          component={renderField}
          placeholder="Password Confirmation"
          bsSize="large"
          className={classes.input}
        />
        <Field
          name="userType"
          type="hidden"
          component={renderField}
          className={classes.hiddenInput}
        />
        {isRequesting && (
          <Alert bsStyle="info">
            {formatMessage(messages.requestingAlert)}
          </Alert>
        )}
        {errorSignUp && <Alert bsStyle="danger">{errorSignUp}</Alert>}
        <SubmitBtn
          value="CREATE ACCOUNT!"
          valid={valid}
          isRequesting={isRequesting}
        />
      </form>
      <div className={classes.signUpDesc}>
        <p>
          Already have an account?{' '}
          <Link to={{ pathname: `/login`, search: `?locale=${lang}` }}>
            Log In
          </Link>{' '}
        </p>
      </div>
    </div>
  );
};

SignUpForm.propTypes = {
  signUp: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSignUp: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  valid: PropTypes.bool.isRequired,
  isRequesting: PropTypes.bool.isRequired,
  errorSignUp: PropTypes.object.isRequired,
  formTitle: PropTypes.string.isRequired,
};

SignUpForm.defaultProps = {};

export default SignUpForm;
