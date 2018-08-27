import React from 'react';
import { Field } from 'redux-form';
import { Redirect } from 'react-router-dom';

import Tags from 'react-tagging-input';

import { ControlLabel, Glyphicon } from 'react-bootstrap';

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

    return <input type="file" onChange={this.onChange} onBlur={() => {}} />;
  }
}

class CreateCard extends React.Component {
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
      messages,
      formatMessage,
      userType,
      data,
      isDataSent,
      type,
    } = this.props;

    const path = type === 'audience_owner' ? '/audience' : '/contentowner';

    const { from } = this.props.location.state || { from: { pathname: path } };

    return isDataSent ? (
      <Redirect to={from} />
    ) : (
      <div className={classes.newChannelWrapper}>
        <div>
          <div className={classes.titleWrapper}>
            <div className={classes.title}>
              {userType === 'audience_owner'
                ? formatMessage(messages.channelTitle)
                : formatMessage(messages.contentTitle)}
            </div>
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
              label={
                userType === 'audience_owner'
                  ? formatMessage(messages.channelTitleInput)
                  : formatMessage(messages.contentTitleInput)
              }
              component={RenderField}
              name="title"
              className={classes.inputFiled}
              type="text"
            />
            <Field
              label={formatMessage(messages.briefDescription)}
              component={RenderField}
              name="briefDescription"
              className={`${classes.inputFiled} `}
              componentClass="textarea"
            />
            <Field
              label={formatMessage(messages.detailedDescription)}
              component={RenderField}
              name="detailed_text"
              className={`${classes.inputFiled} ${classes.textarea}`}
              componentClass="textarea"
            />
            <div className={classes.minAndMaxPrice}>
              <Field
                label={formatMessage(messages.price)}
                component={RenderField}
                name="price"
                type="number"
                min="1"
              />
              <Field
                label={formatMessage(messages.per)}
                component={RenderField}
                name="perUnit"
                min="1"
                placeholder="1000"
                type="number"
              />
              <Field
                label={formatMessage(messages.unit)}
                name="unit"
                component={renderField}
              >
                <option>{'View'}</option>
                <option>{'Finshed minute'}</option>
                <option>{'Like'}</option>
              </Field>
            </div>
            {userType === 'audience_owner' && (
              <Field
                label={formatMessage(messages.channelUrl)}
                component={RenderField}
                type="url"
                name="url"
                placeholder="https://example.com"
                pattern="https://.*"
              />
            )}
            <div className={classes.tags}>
              <ControlLabel>
                <span>{formatMessage(messages.tags)}</span>
                <Tags
                  tags={data.tags ? data.tags : tags}
                  placeholder={formatMessage(messages.tagPlaceholder)}
                  onAdded={this.onTagAdded.bind(this)}
                  onRemoved={this.onTagRemoved.bind(this)}
                />
              </ControlLabel>
            </div>
            <div className={classes.fileUploadWrapper}>
              <div className={classes.fileUpload}>
                <Field type="file" name="poster" component={FileInput} />
                <span>
                  <span>{formatMessage(messages.imgUpload)}</span>
                  <Glyphicon glyph="glyphicon glyphicon-arrow-up" />
                </span>
              </div>
              {userType === 'content_owner' && (
                <React.Fragment>
                  <div className={classes.fileUpload}>
                    <Field type="file" name="poster" component={FileInput} />
                    <span>
                      <span>{formatMessage(messages.videoUpload)}</span>
                      <Glyphicon glyph="glyphicon glyphicon-arrow-up" />
                    </span>
                  </div>
                  <div className={classes.fileUpload}>
                    <Field type="file" name="poster" component={FileInput} />
                    <span>
                      <span>{formatMessage(messages.audioUpload)}</span>
                      <Glyphicon glyph="glyphicon glyphicon-arrow-up" />
                    </span>
                  </div>
                </React.Fragment>
              )}
            </div>
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

export default CreateCard;
