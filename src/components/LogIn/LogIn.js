import React from 'react';
import { Field } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import RenderField from './RenderField';

import './styles.css';

const LogIn = ({ handleSubmit, login, isAuth, location, currentUser }) => {
  const redirectPath = isAuth
    ? currentUser.userType === 'audience_owner'
      ? 'audience'
      : 'contentowner'
    : '';
  const { from } = location.state || { from: { pathname: `/${redirectPath}` } };

  return isAuth ? (
    <Redirect to={from} />
  ) : (
    <form onSubmit={handleSubmit(login)} className="login-form">
      <Field
        name="username"
        component={RenderField}
        type="text"
        label="Text"
        bsSize="large"
        placeholder="Your Username"
      />
      <Field
        name="password"
        component={RenderField}
        type="password"
        label="Password"
        placeholder="Your Password"
        bsSize="large"
      />
      <Button bsStyle="primary" bsSize="large" block type="submit">
        Log In
      </Button>
    </form>
  );
};

export default LogIn;
