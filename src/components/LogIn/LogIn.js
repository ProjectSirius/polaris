import React from 'react';
import { Field } from 'redux-form';
import { Redirect, Link } from 'react-router-dom';
import { injectIntl, defineMessages } from 'react-intl';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

import RenderField from './RenderField';
import SubmitBtn from '../SubmitBtn';

const messages = defineMessages({
  requestingAlert: {
    id: 'requesting-alert',
    defaultMessage: 'Please wait...',
  },
  loginForm: {
    id: 'login-form',
    defaultMessage: 'Log In to Polaris',
  },
  audienceLogin: {
    id: 'login-audience',
    defaultMessage: 'Audience',
  },
  contentOwnerLogin: {
    id: 'login-contentOwner',
    defaultMessage: 'Content',
  },
});

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
  intl: { formatMessage },
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
      <h1 className={classes.loginTitle}>
        {formatMessage(messages.loginForm)}
      </h1>
      <div className={classes.loginForm}>
        <form onSubmit={handleSubmit(login)}>
          <Field
            name="username"
            component={RenderField}
            type="text"
            bsSize="large"
            placeholder="Your Username"
          />
          <Field
            name="password"
            component={RenderField}
            type="password"
            placeholder="Your Password"
            bsSize="large"
          />
          {isRequesting && (
            <Alert bsStyle="info">
              {formatMessage(messages.requestingAlert)}
            </Alert>
          )}
          {loginError && <Alert bsStyle="danger">{loginError}</Alert>}
          <SubmitBtn value="Log In" valid={valid} isRequesting={isRequesting} />
          <div className={classes.signUpDesc}>
            <p>New to Polaris?</p>
            <p>
              Sign up as{' '}
              <Link
                to={{ pathname: `/signupAudience`, search: `?locale=${lang}` }}
              >
                {formatMessage(messages.audienceLogin)}
              </Link>{' '}
              or{' '}
              <Link
                to={{
                  pathname: `/signupContentmaker`,
                  search: `?locale=${lang}`,
                }}
              >
                {formatMessage(messages.contentOwnerLogin)}
              </Link>{' '}
              owner!
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

LogIn.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
  valid: PropTypes.bool.isRequired,
  isRequesting: PropTypes.bool.isRequired,
  loginError: PropTypes.object.isRequired,
};

LogIn.defaultProps = {};

export default injectIntl(LogIn);
