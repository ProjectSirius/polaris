import React from 'react';
import { Field } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import RenderField from './RenderField';

import './styles.css';

const LogIn = ({
  handleSubmit,
  login,
  isAuth,
  location,
  currentUser,
  lang,
  valid,
}) => {
  const redirectPath = isAuth
    ? currentUser.userType === 'audience_owner'
      ? 'audience'
      : 'contentowner'
    : '';
  const { from } = location.state || {
    from: { pathname: `/${redirectPath}`, search: `?locale=${lang}` },
  };

  return isAuth ? (
    <Redirect to={from} />
  ) : (
    <div className="login-form-wrapper">
      <div className="login-form">
        <form onSubmit={handleSubmit(login)}>
          <Field
            name="username"
            component={RenderField}
            type="text"
            bsSize="large"
            placeholder="Your Username"
            className="login-input"
          />
          <Field
            name="password"
            component={RenderField}
            type="password"
            placeholder="Your Password"
            bsSize="large"
            className="login-input"
          />
          <div className="login-submit-wrapper">
            <Button bsSize="large" block type="submit" disabled={!valid}>
              Log In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
