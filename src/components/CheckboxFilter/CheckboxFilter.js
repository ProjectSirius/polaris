import React from 'react';
import { Field } from 'redux-form';

import renderField from './RenderField';

const CheckboxFilter = ({ classes, handleChange, isAuth, currentUser }) => {
  const dataType = isAuth
    ? currentUser.userType === 'content_owner'
      ? 'channels'
      : 'contents'
    : '';

  return (
    <React.Fragment>
      <Field
        name="checkbox1"
        id="1"
        component={renderField}
        type="checkbox"
        label="Option One"
        onChange={e =>
          handleChange(dataType, '', {
            filterName: 'checkbox1',
            value: e.target.checked,
          })
        }
        classes={classes}
      />
      <Field
        name="checkbox2"
        id="2"
        component={renderField}
        type="checkbox"
        label="Option Two"
        classes={classes}
        onChange={e =>
          handleChange(dataType, '', {
            filterName: 'checkbox2',
            value: e.target.checked,
          })
        }
      />
      <Field
        name="checkbox3"
        id="3"
        component={renderField}
        type="checkbox"
        label="Option Three"
        classes={classes}
        onChange={e =>
          handleChange(dataType, '', {
            filterName: 'checkbox3',
            value: e.target.checked,
          })
        }
      />
    </React.Fragment>
  );
};

export default CheckboxFilter;
