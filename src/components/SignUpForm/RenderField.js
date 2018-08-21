import React from 'react';
import { Form, Label } from 'semantic-ui-react';

const TextField = ({ id, label, touched, error, classes, ...props }) => {
  return (
    <Form.Field className={classes.fieldReset} widths="equal">
      <label>{label}:</label>
      <Form.Input {...props} />
      {touched && error ? (
        <Label pointing className={classes.label}>
          {error}
        </Label>
      ) : (
        ''
      )}
    </Form.Field>
  );
};

const renderField = ({
  input,
  classes,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    touched={touched}
    classes={classes}
    error={error}
    {...input}
    {...custom}
  />
);

export default renderField;
