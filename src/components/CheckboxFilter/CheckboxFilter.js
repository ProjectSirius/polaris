import React from 'react';
import { Field } from 'redux-form';

import renderField from './RenderField';

const CheckboxFilter = ({ classes, handleChange, genres }) => {
  return (
    <React.Fragment>
      {genres.map(({ value, id }) => (
        <Field
          name={`${value}`}
          id={id}
          key={id}
          component={renderField}
          type="checkbox"
          label={`${value}`}
          onChange={() => handleChange()}
          classes={classes}
        />
      ))}
    </React.Fragment>
  );
};

export default CheckboxFilter;
