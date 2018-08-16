import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

const TextField = ({ id, label, touched, error, ...props }) => {
  return (
    <React.Fragment>
      <FormGroup
        validationState={touched && error ? 'error' : null}
        controlId={id}
      >
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
  ...custom
}) => <TextField touched={touched} error={error} {...input} {...custom} />;

export default renderField;
