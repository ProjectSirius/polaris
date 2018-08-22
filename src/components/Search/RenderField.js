import React from 'react';
import { Form, Input, Responsive } from 'semantic-ui-react';

const TextField = ({ id, label, touched, error, classes, ...props }) => {
  return (
    <Responsive>
      <Form.Group widths="equal">
        <Form.Field>
          <Input
            icon="search"
            size="huge"
            className={classes.searchInput}
            {...props}
          />
        </Form.Field>
      </Form.Group>
    </Responsive>
  );
};

const renderField = ({
  input,
  meta: { touched, error },
  classes,
  ...custom
}) => (
  <TextField
    touched={touched}
    error={error}
    classes={classes}
    {...input}
    {...custom}
  />
);

export default renderField;
