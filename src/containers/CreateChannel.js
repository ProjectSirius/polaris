import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import {
  selectIsRequesting,
  selectTags,
  selectIsAuth,
  selectCurrentUser,
  selectDetails,
  selectIsEditing,
  selectEditDetails,
} from '../selectors';

import { addTags, removeTags, sendData, getDetails, edit } from '../actions';

import CreateCard from '../components/CreateCard';

import channelFormValidate from '../helpers/channelFormValidate';
import messages from '../helpers/contentChannelFormMessages';

class CreateChannelContainer extends Component {
  componentDidMount() {
    const dataType = 'channels';
    const id = this.props.match.params.id;
    this.props.getDetails(dataType, id);

    if (this.props.match.path.split('/').includes('edit')) {
      this.props.edit();
    }
  }

  onFormSubmit = formData => {
    this.props.sendData(formData, 'createChannel');
  };

  getData = () => {
    const id = this.props.match.params.id;

    this.props.getDetails('channels', id);
  };

  render() {
    const {
      intl: { formatMessage },
      data,
      isEditing,
      initialValues,
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
        initialValues={initialValues}
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
  data: selectDetails,
  isEditing: selectIsEditing,
  initialValues: selectEditDetails,
});

const addNewChannelForm = withRouter(
  reduxForm({
    form: 'Add_new_channel_form',
    validate: channelFormValidate,
    enableReinitialize: true,
  })(CreateChannelContainer)
);

export default withRouter(
  connect(
    mapStateToProps,
    {
      addTags,
      removeTags,
      sendData,
      getDetails,
      edit,
    }
  )(addNewChannelForm)
);
