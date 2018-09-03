import React from 'react';
import { Field } from 'redux-form';
import { Form } from 'semantic-ui-react';

import RenderField from './RenderField';
import SubmitBtn from '../SubmitBtn';

const GroupOffer = ({ groupLength, valid, singleOffer, classes }) => {
  return (
    <Form className={classes.form}>
      <Field
        name="group_name"
        type="text"
        component={RenderField}
        label={singleOffer ? 'Offer name' : 'Group offer name'}
        classes={classes}
      />
      <Field
        name="group_price"
        type="number"
        component={RenderField}
        label="Price to offer"
        min="1"
        classes={classes}
      />
      {singleOffer ? (
        <Field
          name="group_accept_number"
          type="hidden"
          value={1}
          component={RenderField}
          classes={classes}
        />
      ) : (
        <Field
          name="group_accept_number"
          type="number"
          component={RenderField}
          label="Min number of acceptance"
          min="0"
          max={groupLength}
          classes={classes}
        />
      )}
      <SubmitBtn value="Offer!" valid={valid} />
    </Form>
  );
};

export default GroupOffer;
