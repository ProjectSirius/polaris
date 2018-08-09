import React from 'react';
import { FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';

const TextField = ({ id, label, touched, error, ...props }) => {
  return (
    <FormGroup>
      <InputGroup>
        <InputGroup.Addon>
          <Glyphicon glyph="glyphicon glyphicon-search" />
        </InputGroup.Addon>

        <FormControl type="text" {...props} />
      </InputGroup>
    </FormGroup>
  );
};

const renderField = ({ input, meta: { touched, error }, ...custom }) => (
  <TextField touched={touched} error={error} {...input} {...custom} />
);

export default renderField;
