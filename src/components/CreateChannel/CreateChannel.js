import React from 'react';
import { Field } from 'redux-form';

import RenderField from './RenderField';
import renderField from '../SelectOptionFilter/RenderField';

const CreateChannel = ({ title, classes }) => {
  return (
    <div className={classes.newChannelWrapper}>
      <div className={classes.title}>Create New Channel</div>
      <form action="" className={classes.form}>
        <Field
          component={RenderField}
          name="title"
          placeholder="Channel Title"
          className={classes.inputFiled}
          type="text"
        />
        <Field
          component={RenderField}
          name="detailedText"
          placeholder="Detailed description"
          className={`${classes.inputFiled} ${classes.textarea}`}
          componentClass="textarea"
        />
        <div className={classes.minAndMaxPrice}>
          <Field
            component={RenderField}
            name="MinPrice"
            placeholder="Min Price"
            type="number"
          />
          <Field
            component={RenderField}
            name="MaxPrice"
            placeholder="Max Price"
            type="number"
          />
        </div>
        <Field name="selectedOption" component={renderField}>
          <option>{'Select an option'}</option>
          <option>{'Option 1'}</option>
          <option>{'Option 2'}</option>
          <option>{'Option 3'}</option>
        </Field>
        <Field component={RenderField} name="file" type="file" size="60" />
      </form>
    </div>
  );
};

export default CreateChannel;
