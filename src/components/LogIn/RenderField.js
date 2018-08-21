import React from 'react';
import { Form, Label } from 'semantic-ui-react';

const TextField = ({ id, label, touched, error, classes, icon, ...props }) => {
  return (
    <Form.Field className={classes.fieldReset} widths="equal">
      <label>{label}:</label>
      <Form.Input icon={icon ? icon : ''} iconPosition="left" {...props} />
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
  meta: { touched, error },
  classes,
  ...custom
}) => (
  <TextField
    classes={classes}
    touched={touched}
    error={error}
    {...input}
    {...custom}
  />
);

export default renderField;
