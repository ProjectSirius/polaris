import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

const TextField = ({ id, label, touched, error, ...props }) => {
  return (
    <div>
      <FormGroup controlId="formControlsSelect">
        <ControlLabel>{label}</ControlLabel>
        <FormControl
          {...props}
          componentClass="select"
          placeholder="Select an option"
        />
      </FormGroup>
    </div>
  );
};

const renderField = ({
  input,
  meta: { touched, error },
  data,
  label,
  ...custom
}) => (
  <div>
    <TextField
      touched={touched}
      error={error}
      label={label}
      {...input}
      {...custom}
    />
  </div>
);

export default renderField;
