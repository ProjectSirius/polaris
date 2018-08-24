import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

const TextField = ({ id, label, touched, error, ...props }) => {
  return (
    <React.Fragment>
      <FormGroup
        controlId={id}
        validationState={touched && error ? 'error' : null}
      >
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {touched && error ? <span className="feedbackError">{error}</span> : ''}
      </FormGroup>
    </React.Fragment>
  );
};

const renderField = ({
  input,
  meta: { touched, error },
  classes,
  label,
  ...custom
}) => (
  <TextField
    label={label}
    touched={touched}
    error={error}
    {...input}
    {...custom}
  />
);

export default renderField;
