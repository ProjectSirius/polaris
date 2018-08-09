import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

import './styles.css';

const TextField = ({ id, label, touched, error, ...props }) => {
  return touched && error ? (
    <div>
      <span className="alert">{error}</span>
      <FormGroup controlId={id} className="input-container">
        <FormControl {...props} className="error" />
      </FormGroup>
    </div>
  ) : (
    <FormGroup controlId={id}>
      <FormControl {...props} />
    </FormGroup>
  );
};

const renderField = ({ input, meta: { touched, error }, ...custom }) => (
  <div>
    <TextField touched={touched} error={error} {...input} {...custom} />
  </div>
);

export default renderField;
