import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import {
  selectDetailed,
  selectIsEditing,
  selectIsRequesting,
  selectTags,
} from '../selectors';

import { addTags, removeTags, sendData, getDetails } from '../actions';

import CreateCard from '../components/CreateCard';

import channelFormValidate from '../helpers/channelFormValidate';
import messages from '../helpers/contentChannelFormMessages';

class CreateContentContainer extends Component {
  componentDidMount() {
    const dataType = 'contents';

    this.props.getDetails(dataType, '1');
  }

  getData = () => {
    this.props.getDetails('contents', '1');
  };

  onFormSubmit = formData => {
    this.props.sendData(formData, 'createContent');
  };

  render() {
    const {
      intl: { formatMessage },
      isEditing,
      data,
    } = this.props;

    return (
      <CreateCard
        messages={messages}
        userType="content_owner"
        onFormSubmit={this.onFormSubmit}
        formatMessage={formatMessage}
        getData={this.getData}
        data={data}
        isEditing={isEditing}
        {...this.props}
      />
    );
  }
}

CreateContentContainer = injectIntl(CreateContentContainer);

const mapStateToProps = createStructuredSelector({
  isRequesting: selectIsRequesting,
  tags: selectTags,
  data: selectDetailed,
  isEditing: selectIsEditing,
});

const addNewContentForm = reduxForm({
  form: 'Add_new_content_form',
  validate: channelFormValidate,
  initialValues: {
    unit: 'view',
  },
  destroyOnUnmount: false,
})(CreateContentContainer);

export default connect(
  mapStateToProps,
  {
    addTags,
    removeTags,
    sendData,
    getDetails,
  }
)(addNewContentForm);
