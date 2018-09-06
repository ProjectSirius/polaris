import React from 'react';
import { Field } from 'redux-form';
import { Redirect } from 'react-router-dom';

import Tags from 'react-tagging-input';

import { ControlLabel } from 'react-bootstrap';

import RenderField from './RenderField';
import renderField from '../SelectOptionFilter/RenderField';
import SubmitBtn from '../SubmitBtn';
import LocationSearchInput from '../../containers/LocationSearchInputContainer';

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
      data,
      isDataSent,
      type,
      editRedirect,
    } = this.props;

    const path = type === 'audience_owner' ? '/audience' : '/contentowner';
    const { from } = this.props.location.state || { from: { pathname: path } };

    if (isDataSent) {
      editRedirect();
      return <Redirect to={from} />;
    }

    return (
      <div className={classes.newChannelWrapper}>
        <div>
          <div className={classes.titleWrapper}>
            <div className={classes.title}>
              {type === 'audience_owner'
                ? window.location.pathname.split('/').includes('edit')
                  ? formatMessage(messages.editChannel)
                  : formatMessage(messages.channelTitle)
                : window.location.pathname.split('/').includes('edit')
                  ? formatMessage(messages.editContent)
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
                type === 'audience_owner'
                  ? formatMessage(messages.channelTitleInput)
                  : formatMessage(messages.contentTitleInput)
              }
              component={RenderField}
              name="title"
              className={classes.inputFiled}
              type="text"
            />
            <Field
              label={formatMessage(messages.detailedDescription)}
              component={RenderField}
              name="description"
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
            {type === 'audience_owner' && (
              <Field
                label={formatMessage(messages.channelUrl)}
                component={RenderField}
                type="url"
                name="url"
                placeholder="https://example.com"
                pattern="https://.*"
              />
            )}
            <Field
              label={formatMessage(messages.imgUrl)}
              component={RenderField}
              type="url"
              name="imgUrl"
              placeholder="https://example.com"
              pattern="https://.*"
            />
            <Field
              label={formatMessage(messages.videoUrl)}
              component={RenderField}
              type="url"
              name="videoUrl"
              placeholder="https://example.com"
              pattern="https://.*"
            />
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
            <LocationSearchInput />
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
