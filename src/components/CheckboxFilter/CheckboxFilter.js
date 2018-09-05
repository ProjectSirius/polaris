import React from 'react';
import { Field } from 'redux-form';

import renderField from './RenderField';

const CheckboxFilter = ({ classes, handleChange, genres }) => {
  return (
    <React.Fragment>
      {genres.length !== 0
        ? genres.map((genre) => (
            <Field
              name={`${genre.el}`}
              checked={genre.checked}
              id={genre.id}
              key={genre.id}
              component={renderField}
              type="checkbox"
              label={`${genre.el}`}
              onChange={() => handleChange(genre.id, genre.checked)}
              classes={classes}
            />
          ))
        : ''}
    </React.Fragment>
  );
};

export default CheckboxFilter;
