import React from 'react';
import { Search } from 'semantic-ui-react';

const TextField = ({
  id,
  value,
  label,
  isRequesting,
  touched,
  error = '',
  searchValue,
  onChange,
  ...props
}) => {
  return (
    <Search
      fluid
      showNoResults={false}
      loading={isRequesting}
      value={searchValue}
      onSearchChange={onChange}
      {...props}
    />
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
