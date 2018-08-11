import React from 'react';
import { Field } from 'redux-form';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import RenderField from './RenderField';
import SubmitBtn from '../SubmitBtn';

import './styles.css';
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
          {isRequesting && <Alert bsStyle="info">Please wait...</Alert>}
          {loginError && <Alert bsStyle="danger">{loginError}</Alert>}
          <SubmitBtn value="Log In" valid={valid} isRequesting={isRequesting} />
        </form>
      </div>
    </div>
  );
};

LogIn.PropTypes = {
  handleSubmit: PropTypes.func,
  login: PropTypes.func,
  isAuth: PropTypes.bool,
  location: PropTypes.object,
  currentUser: PropTypes.object,
  lang: PropTypes.string,
  valid: PropTypes.bool,
  isRequesting: PropTypes.bool,
  loginError: PropTypes.object,
};

export default LogIn;
