import React from 'react';
import { Field } from 'redux-form';
import { Button } from 'react-bootstrap';

import RenderField from './RenderField';

import './styles.css';

const LogIn = ({ handleSubmit, login }) => {
  return (
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
