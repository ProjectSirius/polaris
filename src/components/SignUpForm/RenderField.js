import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

const TextField = ({ id, label, touched, error, ...props }) => {
  return (
    <div>
      <FormGroup
        validationState={touched && error ? 'error' : null}
        controlId={id}
        className="input-container"
      >
        <FormControl {...props} className="error" />
        {touched && error ? <span>{error}</span> : ''}
      </FormGroup>
    </div>
  );
};

const renderField = ({ input, meta: { touched, error }, ...custom }) => (
  <div>
    <TextField touched={touched} error={error} {...input} {...custom} />
  </div>
);

export default renderField;
