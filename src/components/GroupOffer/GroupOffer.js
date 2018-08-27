import React from 'react';
import { Field } from 'redux-form';
import { Form } from 'semantic-ui-react';

import RenderField from './RenderField';
import SubmitBtn from '../SubmitBtn';

const GroupOffer = ({ groupLength, valid }) => {
  return (
    <Form>
      <Field
        name="group_name"
        type="text"
        component={RenderField}
        label="Group name"
      />
      <Field
        name="group_price"
        type="number"
        component={RenderField}
        label="Price to offer"
        min="1"
      />
      <Field
        name="group_accept_number"
        type="number"
        component={RenderField}
        label="Min number of acceptance"
        min="0"
        max={groupLength}
      />
      <SubmitBtn value="Offer!" valid={valid} />
    </Form>
  );
};

export default GroupOffer;
