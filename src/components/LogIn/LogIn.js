import React from 'react';
import { Field } from 'redux-form';
import { Redirect, Link } from 'react-router-dom';
import { injectIntl, defineMessages } from 'react-intl';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';
import { Form, Grid, Message, Icon } from 'semantic-ui-react';

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
      <Grid columns={16} centered>
        <Grid.Column computer={8} mobile={16}>
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
            />
            <Field
              name="password"
              component={RenderField}
              type="password"
              placeholder="Your Password"
              classes={classes}
            />
            {isRequesting && (
              <Alert bsStyle="info">
                {formatMessage(messages.requestingAlert)}
              </Alert>
            )}
            {loginError && <Alert bsStyle="danger">{loginError}</Alert>}
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
                  search: `?locale=${lang}`,
                }}
              >
                {formatMessage(messages.audienceLogin)}
              </Link>{' '}
              or{' '}
              <Link
                className={classes.link}
                to={{
                  pathname: `/signupContentmaker`,
                  search: `?locale=${lang}`,
                }}
              >
                {formatMessage(messages.contentOwnerLogin)}
              </Link>{' '}
              owner!
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
  loginError: PropTypes.object.isRequired,
};

LogIn.defaultProps = {};

export default injectIntl(LogIn);
