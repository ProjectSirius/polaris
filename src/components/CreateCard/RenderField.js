import React from 'react';
import { Form } from 'semantic-ui-react';
import { FormControl } from 'react-bootstrap';

const TextField = ({ id, label, touched, error, ...props }) => {
  return (
    <React.Fragment>
      <Form.Group validationState={touched && error ? 'error' : null}>
        <label>{label}</label>
        <FormControl {...props} />
        {touched && error ? <span className="feedbackError">{error}</span> : ''}
      </Form.Group>
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
