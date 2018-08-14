import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

const TextField = ({ id, label, touched, error, ...props }) => {
  return (
    <div>
      <FormGroup controlId={id}>
        <FormControl {...props} style={{ padding: 0 }} />
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
