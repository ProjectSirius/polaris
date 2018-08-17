import React from 'react';
import { Field } from 'redux-form';

import RenderField from './RenderField';
import renderField from '../SelectOptionFilter/RenderField';
import SubmitBtn from '../SubmitBtn';

const CreateChannel = ({ isRequesting, classes, valid }) => {
  return (
    <div className={classes.newChannelWrapper}>
      <div>
        <div className={classes.titleWrapper}>
          <div className={classes.title}>Create New Channel</div>
        </div>
        <form
          action="https://acampapi.haffollc.com/v1/channels"
          method="post"
          className={classes.form}
          encType="multipart/form-data"
        >
          <Field
            label="Channel Title:"
            component={RenderField}
            name="title"
            className={classes.inputFiled}
            type="text"
          />
          <Field
            label="Brief Description:"
            component={RenderField}
            name="description"
            className={`${classes.inputFiled} `}
            componentClass="textarea"
          />
          <Field
            label="Detailed Description:"
            component={RenderField}
            name="detailedText"
            className={`${classes.inputFiled} ${classes.textarea}`}
            componentClass="textarea"
          />
          <div className={classes.minAndMaxPrice}>
            <Field
              label="Price:"
              component={RenderField}
              name="price"
              type="number"
              min="1"
            />
            <Field
              label="Per:"
              component={RenderField}
              name="count"
              placeholder="1000"
              type="number"
            />
            <Field label="Unit" name="unit" component={renderField}>
              <option>{'View'}</option>
              <option>{'Finshed minute'}</option>
              <option>{'Like'}</option>
            </Field>
          </div>
          <Field
            label="Link Of Your Channel:"
            component={RenderField}
            type="url"
            name="url"
            placeholder="https://example.com"
            pattern="https://.*"
          />
          <Field label="Tags:" component={RenderField} type="tags" name="tag" />
          <SubmitBtn value="Submit" valid={valid} isRequesting={isRequesting} />
        </form>
      </div>
    </div>
  );
};

export default CreateChannel;
