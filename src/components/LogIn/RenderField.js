import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const TextField = ({ id, label, touched, error, ...props }) => {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
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
