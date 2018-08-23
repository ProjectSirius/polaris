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

  const { from } = location.state || {
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
              Fill out the form below to log-in!
            </Message.Content>
          </Message>
          <Form onSubmit={handleSubmit(login)} className="attached segment">
            <Field
              name="username"
              component={RenderField}
              type="text"
              placeholder="Your Username"
              classes={classes}
              label="Username"
              icon="address card"
            />
            <Field
              name="password"
              component={RenderField}
              type="password"
              placeholder="Your Password"
              classes={classes}
              label="Password"
              icon="attention"
            />
            {isRequesting && (
              <RequestMessage
                msgBody={formatMessage(messages.requestingAlert)}
              />
            )}
            {loginError && <NegativeMessage msgHeader={loginError} />}
            <SubmitBtn
              value="Log In"
              valid={valid}
              isRequesting={isRequesting}
            />
          </Form>
          <Message attached="bottom" warning>
            <Icon name="help" />
            New to Polaris?
            <p>
              Sign up as{' '}
              <Link
                className={classes.link}
                to={{
                  pathname: `/signupAudience`,
                }}
              >
                {formatMessage(messages.audienceLogin)}
              </Link>{' '}
              or{' '}
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
  currentUser: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
  valid: PropTypes.bool.isRequired,
  isRequesting: PropTypes.bool.isRequired,
  loginError: PropTypes.string.isRequired,
};

LogIn.defaultProps = {};

export default injectIntl(LogIn);
