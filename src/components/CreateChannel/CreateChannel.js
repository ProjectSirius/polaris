import React from 'react';
import { Field } from 'redux-form';

import Tags from 'react-tagging-input';

import { ControlLabel } from 'react-bootstrap';

import RenderField from './RenderField';
import renderField from '../SelectOptionFilter/RenderField';
import SubmitBtn from '../SubmitBtn';

class FileInput extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const {
      input: { onChange },
    } = this.props;
    onChange({
      file: e.target.files,
      name: e.target.files[0].name,
    });
  }

  render() {
    /*    const {
      input: { value },
    } = this.props;*/

    return (
      <input
        type="file"
        value={this.state.value}
        onChange={this.onChange}
        onBlur={() => {}}
      />
    );
  }
}

class CreateChannel extends React.Component {
  onTagAdded(tag) {
    this.props.addTags(tag);
  }

  onTagRemoved(tag, index) {
    this.props.removeTags(tag, index);
  }

  render() {
    const {
      isRequesting,
      classes,
      valid,
      tags,
      handleSubmit,
      onFormSubmit,
    } = this.props;

    return (
      <div className={classes.newChannelWrapper}>
        <div>
          <div className={classes.titleWrapper}>
            <div className={classes.title}>Create New Channel</div>
          </div>
          <form
            className={classes.form}
            onSubmit={handleSubmit(onFormSubmit)}
            encType="multipart/form-data"
            onKeyDown={e => {
              if (e.key === 'Enter') e.preventDefault();
            }}
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

            <div className={classes.tags}>
              <ControlLabel>
                <span>Tags:</span>
                <Tags
                  tags={tags}
                  placeholder="Add a tag"
                  onAdded={this.onTagAdded.bind(this)}
                  onRemoved={this.onTagRemoved.bind(this)}
                />
              </ControlLabel>
            </div>
            <Field type="file" name="poster" component={FileInput} />
            <SubmitBtn
              value="Submit"
              valid={valid}
              isRequesting={isRequesting}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default CreateChannel;
