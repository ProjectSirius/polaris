import React, { Component } from 'react';
import { Checkbox } from 'semantic-ui-react';

class TextField extends Component {
  render() {
    const { label } = this.props;

    return <Checkbox label={label} />;
  }
}

const renderField = props => {
  const {
    input,
    meta: { touched, error },
    ...custom
  } = props;

  return <TextField touched={touched} error={error} {...input} {...custom} />;
};

export default renderField;
