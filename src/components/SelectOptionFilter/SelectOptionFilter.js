import React from 'react';
import { Field } from 'redux-form';

import renderField from './RenderField';

const data = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5'];

const SelectOptionFilter = ({ handleChange, currentUser, isAuth, option }) => {
  const dataType = isAuth
    ? currentUser.userType === 'content_owner'
      ? 'channels'
      : 'contents'
    : '';

  return (
    <div>
      <div>
        <Field
          name="selectedOption"
          component={renderField}
          onChange={() =>
            handleChange(dataType, '', { filterName: 'select', value: option })
          }
        >
          <option>{'Select an option'}</option>
          {data.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </Field>
      </div>
    </div>
  );
};
export default SelectOptionFilter;
