import React from 'react';
import { Field } from 'redux-form';
import { Redirect, Link } from 'react-router-dom';
import { injectIntl, defineMessages } from 'react-intl';
import PropTypes from 'prop-types';
import { Form, Grid, Message, Icon } from 'semantic-ui-react';

import RenderField from './RenderField';
import SubmitBtn from '../SubmitBtn';
import NegativeMessage from '../Messages/NegativeMsg';
import RequestMessage from '../Messages/RequestMsg/';

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
  newToPolaris: {
    id: 'newToPolaris',
    defaultMessage: 'New to polaris',
  },
  signUpAs: {
    id: 'signUpAs',
    defaultMessage: 'Sign Up As',
  },
  or: {
    id: 'or',
    defaultMessage: 'or',
  },
  fillForm: {
    id: 'fillForm',
    defaultMessage: 'Fill out the form below to log-in!',
  },
  logIn: {
    id: 'logIn',
    defaultMessage: 'Log In',
  },
  password: {
    id: 'password',
    defaultMessage: 'Password',
  },
  username: {
    id: 'username',
    defaultMessage: 'Username',
  },
});

const LogIn = ({
  handleSubmit,
  login,
  isAuth,
  location,
  currentUser,
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

  const { from } = {
    from: { pathname: `/${redirectPath}` },
  };

  return isAuth ? (
    <Redirect to={from} />
  ) : (
    <div className={classes.loginFormWrapper}>
      <Grid columns={16} centered>
        <Grid.Column computer={8} mobile={14}>
          <Message attached>
            <Message.Header className={classes.messageHeaderText}>
              {formatMessage(messages.loginForm)}
            </Message.Header>
            <Message.Content className={classes.messageText}>
              {formatMessage(messages.fillForm)}
            </Message.Content>
          </Message>
          <Form onSubmit={handleSubmit(login)} className="attached segment">
            <Field
              name="username"
              component={RenderField}
              type="text"
              placeholder={formatMessage(messages.username)}
              classes={classes}
              label={formatMessage(messages.username)}
              icon="address card"
            />
            <Field
              name="password"
              component={RenderField}
              type="password"
              placeholder={formatMessage(messages.password)}
              classes={classes}
              label={formatMessage(messages.password)}
              icon="attention"
            />
            {isRequesting && (
              <RequestMessage
                msgBody={formatMessage(messages.requestingAlert)}
              />
            )}
            {loginError && <NegativeMessage msgHeader={loginError} />}
            <SubmitBtn
              value={formatMessage(messages.logIn)}
              valid={valid}
              isRequesting={isRequesting}
            />
          </Form>
          <Message attached="bottom" warning>
            <Icon name="help" />
            {formatMessage(messages.newToPolaris)}
            <p>
              {formatMessage(messages.signUpAs)}{' '}
              <Link
                className={classes.link}
                to={{
                  pathname: `/signupAudience`,
                }}
              >
                {formatMessage(messages.audienceLogin)}
              </Link>{' '}
              {formatMessage(messages.or)}{' '}
              <Link
                className={classes.link}
                to={{
                  pathname: `/signupContentmaker`,
                }}
              >
                {formatMessage(messages.contentOwnerLogin)}
              </Link>{' '}
            </p>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
};

LogIn.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  currentUser: PropTypes.object,
  lang: PropTypes.string.isRequired,
  valid: PropTypes.bool.isRequired,
  isRequesting: PropTypes.bool.isRequired,
  loginError: PropTypes.string.isRequired,
};

LogIn.defaultProps = {};

export default injectIntl(LogIn);
