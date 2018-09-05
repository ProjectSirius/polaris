import React from 'react';
import { Form, Label } from 'semantic-ui-react';

const TextField = ({ id, icon, label, touched, error, classes, ...props }) => {
  return (
    <Form.Field widths="equal">
      {label ? <label className={classes.label}>{label}:</label> : ''}
      <Form.Input
        icon={icon ? icon : ''}
        iconPosition="left"
        {...props}
        className={classes.input}
      />
      {touched && error ? <Label pointing>{error}</Label> : ''}
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
