import React from 'react';
import { Form, Input, Responsive } from 'semantic-ui-react';

const TextField = ({ id, label, touched, error, ...props }) => {
  return (
    <Responsive>
      <Form.Group widths="equal">
        <Form.Field>
          <Input
            icon="search"
            style={{ width: '100%' }}
            size="huge"
            {...props}
          />
        </Form.Field>
      </Form.Group>
    </Responsive>
  );
};

const renderField = ({ input, meta: { touched, error }, ...custom }) => (
  <TextField touched={touched} error={error} {...input} {...custom} />
);

export default renderField;
