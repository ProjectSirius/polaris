import React from 'react';
import { Field } from 'redux-form';
import { Redirect, Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Form, Grid, Message, Icon } from 'semantic-ui-react';

import NegativeMessage from '../NegativeMsg/NegativeMsg';
import RequestMessage from '../RequestMsg/RequestMsg';
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
      <Grid columns={16} centered>
        <Grid.Column computer={8} mobile={14}>
          <Message attached>
            <Message.Header className={classes.messageHeaderText}>
              {user === 'audience'
                ? formatMessage(messages.audience)
                : formatMessage(messages.content)}
              {' ' + formatMessage(messages.formTitle)}
            </Message.Header>
            <Message.Content className={classes.messageText}>
              Fill out the form below to sign up in a new account!
            </Message.Content>
          </Message>
          <Form onSubmit={handleSubmit(signUp)} className="attached segment">
            <Field
              name="username"
              type="text"
              component={renderField}
              placeholder="Username"
              bsSize="large"
              className={classes.input}
              classes={classes}
              label="Username"
            />
            <Field
              name="email"
              type="email"
              component={renderField}
              placeholder="Email"
              classes={classes}
              label="Email"
            />
            <Field
              name="password"
              type="password"
              component={renderField}
              placeholder="Password"
              bsSize="large"
              className={classes.input}
              classes={classes}
              label="Password"
            />
            <Field
              name="passwordConfirmation"
              type="password"
              component={renderField}
              placeholder="Password Confirmation"
              bsSize="large"
              classes={classes}
              label="Confirm Password"
            />
            {isRequesting && (
              <RequestMessage
                msgBody={formatMessage(messages.requestingAlert)}
              />
            )}
            {errorSignUp && <NegativeMessage msgHeader={errorSignUp} />}
            <SubmitBtn
              value="Sign Up!"
              valid={valid}
              isRequesting={isRequesting}
            />
          </Form>
          <Message attached="bottom" warning>
            <Icon name="help" />
            Already have an account?{' '}
            <p>
              <Link
                className={classes.link}
                to={{ pathname: `/login`, search: `?locale=${lang}` }}
              >
                Login here
              </Link>{' '}
              instead.
            </p>
          </Message>
        </Grid.Column>
      </Grid>
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
