import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import {
  selectIsRequesting,
  selectTags,
  selectIsAuth,
  selectCurrentUser,
  selectDetailed,
  selectIsEditing,
} from '../selectors';

import { addTags, removeTags, sendData, getDetails } from '../actions';

import CreateCard from '../components/CreateCard';

import channelFormValidate from '../helpers/channelFormValidate';
import messages from '../helpers/contentChannelFormMessages';

class CreateChannelContainer extends Component {
  componentDidMount() {
    const dataType = 'channels';

    this.props.getDetails(dataType, '1');
  }

  onFormSubmit = formData => {
    this.props.sendData(formData, 'createChannel');
  };

  getData = () => {
    this.props.getDetails('channels', '1');
  };

  render() {
    const {
      intl: { formatMessage },
      data,
      isEditing,
    } = this.props;

    return (
      <CreateCard
        messages={messages}
        formatMessage={formatMessage}
        onFormSubmit={this.onFormSubmit}
        userType="audience_owner"
        data={data}
        isEditing={isEditing}
        getData={this.getData}
        {...this.props}
      />
    );
  }
}

CreateChannelContainer = injectIntl(CreateChannelContainer);

const mapStateToProps = createStructuredSelector({
  isRequesting: selectIsRequesting,
  tags: selectTags,
  isAuth: selectIsAuth,
  currentUser: selectCurrentUser,
  data: selectDetailed,
  isEditing: selectIsEditing,
  initialValues: window.location.pathname.split('/').includes('edit')
    ? selectDetailed
    : () => {},
});

const addNewChannelForm = reduxForm({
  form: 'Add_new_channel_form',
  validate: channelFormValidate,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(CreateChannelContainer);

export default connect(
  mapStateToProps,
  {
    addTags,
    removeTags,
    sendData,
    getDetails,
  }
)(addNewChannelForm);
