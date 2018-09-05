import React from 'react';
import { Field } from 'redux-form';
import { Redirect, Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Form, Grid, Message, Icon } from 'semantic-ui-react';

import NegativeMessage from '../Messages/NegativeMsg';
import RequestMessage from '../Messages/RequestMsg/';
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
              {formatMessage(messages.formTitle)}{' '}
              {user === 'audience'
                ? formatMessage(messages.audienceSignUp)
                : formatMessage(messages.contentSignUp)}
            </Message.Header>
            <Message.Content className={classes.messageText}>
              {formatMessage(messages.fillSignUpForm)}
            </Message.Content>
          </Message>
          <Form onSubmit={handleSubmit(signUp)} className="attached segment">
            <Field
              name="username"
              type="text"
              component={renderField}
              placeholder={formatMessage(messages.username)}
              bsSize="large"
              className={classes.input}
              classes={classes}
              label={formatMessage(messages.username)}
              icon="address card"
            />
            <Field
              name="email"
              type="email"
              component={renderField}
              placeholder={formatMessage(messages.email)}
              classes={classes}
              label={formatMessage(messages.email)}
              icon="at"
            />
            <Field
              name="password"
              type="password"
              component={renderField}
              placeholder={formatMessage(messages.password)}
              bsSize="large"
              className={classes.input}
              classes={classes}
              label={formatMessage(messages.password)}
              icon="attention"
            />
            <Field
              name="passwordConfirmation"
              type="password"
              component={renderField}
              placeholder={formatMessage(messages.confirms)}
              bsSize="large"
              classes={classes}
              label={formatMessage(messages.confirms)}
              icon="attention"
            />
            {isRequesting && (
              <RequestMessage
                msgBody={formatMessage(messages.requestingAlert)}
              />
            )}
            {errorSignUp && <NegativeMessage msgHeader={errorSignUp} />}
            <SubmitBtn
              value={formatMessage(messages.signUp)}
              valid={valid}
              isRequesting={isRequesting}
            />
          </Form>
          <Message attached="bottom" warning>
            <Icon name="help" />
            {formatMessage(messages.haveAcc)}{' '}
            <p>
              <Link
                className={classes.link}
                to={{ pathname: `/login`, search: `?locale=${lang}` }}
              >
                {formatMessage(messages.login)}
              </Link>{' '}
              {formatMessage(messages.instead)}.
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
