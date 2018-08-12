import React from 'react';
import { Field } from 'redux-form';

import renderField from './RenderField';

const CheckboxFilter = ({ classes }) => (
  <div>
    <div>
      <Field
        name="checkbox1"
        id="1"
        component={renderField}
        type="checkbox"
        label="Option One"
        classes={classes}
      />
    </div>
    <div>
      <Field
        name="checkbox2"
        id="2"
        component={renderField}
        type="checkbox"
        label="Option Two"
        classes={classes}
      />
    </div>
    <div>
      <Field
        name="checkbox3"
        id="3"
        component={renderField}
        type="checkbox"
        label="Option Three"
        classes={classes}
      />
    </div>
  </div>
);
export default CheckboxFilter;
