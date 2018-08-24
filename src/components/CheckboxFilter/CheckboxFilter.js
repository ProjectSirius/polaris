import React from 'react';
import { Field } from 'redux-form';

import renderField from './RenderField';

const CheckboxFilter = ({ classes, handleChange, genres }) => {
  return (
    <React.Fragment>
      {genres.map(({ value, id, checked }) => (
        <Field
          name={`${value}`}
          checked={checked}
          id={id}
          key={id}
          component={renderField}
          type="checkbox"
          label={`${value}`}
          onChange={() => handleChange(id, checked)}
          classes={classes}
        />
      ))}
    </React.Fragment>
  );
};

export default CheckboxFilter;
