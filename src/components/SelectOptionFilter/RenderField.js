import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

const TextField = ({ id, label, touched, error, ...props }) => {
  return (
    <div>
      <FormGroup controlId="formControlsSelect">
        <FormControl
          {...props}
          componentClass="select"
          placeholder="Select an option"
        />
      </FormGroup>
    </div>
  );
};

const renderField = ({ input, meta: { touched, error }, data, ...custom }) => (
  <div>
    <TextField touched={touched} error={error} {...input} {...custom} />
  </div>
);

export default renderField;
