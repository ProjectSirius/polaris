import React from 'react';
import { Field } from 'redux-form';
import { Redirect } from 'react-router-dom';

import RenderField from './RenderField';
import SubmitBtn from '../SubmitBtn';

import { Alert } from 'react-bootstrap';

const LogIn = ({
  handleSubmit,
  login,
  isAuth,
  location,
  currentUser,
  lang,
  valid,
  isRequesting,
  loginError,
  classes,
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
    <div className={classes.loginFormWrapper}>
      <div className={classes.loginForm}>
        <form onSubmit={handleSubmit(login)}>
          <Field
            name="username"
            component={RenderField}
            type="text"
            bsSize="large"
            placeholder="Your Username"
            className={classes.loginInput}
          />
          <Field
            name="password"
            component={RenderField}
            type="password"
            placeholder="Your Password"
            bsSize="large"
            className="login-input"
          />
          {isRequesting && <Alert bsStyle="info">Please wait...</Alert>}
          {loginError && <Alert bsStyle="danger">{loginError}</Alert>}
          <SubmitBtn value="Log In" valid={valid} isRequesting={isRequesting} />
        </form>
      </div>
    </div>
  );
};

export default LogIn;
