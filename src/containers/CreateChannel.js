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
  selectIsDataSent,
  selectAddress,
} from '../selectors';
import {
  addTags,
  removeTags,
  sendData,
  getDetails,
  editRequest,
} from '../actions';
import editData, { editRedirect } from '../actions/edit';
import { dataSendSuccess } from '../actions/sendData';
import CreateCard from '../components/CreateCard';
import channelFormValidate from '../helpers/channelFormValidate';
import messages from '../helpers/contentChannelFormMessages';

class CreateChannelContainer extends Component {
  componentDidMount() {
    const dataType = 'channels';

    if (this.props.match.path.split('/').includes('edit')) {
      const id = this.props.match.params.id;
      this.props.getDetails(dataType, id);
      this.props.editRequest();
    }
  }

  onFormSubmit = formData => {
    const tags = this.props.tags;

    if (this.props.history.location.pathname.includes('edit')) {
      this.props.editData({ ...formData, tags });
      this.props.history.push('/dashboard');
    } else {
      this.props.sendData({ ...formData, tags }, 'createChannel');
      this.props.dataSendSuccess();
    }
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
      isDataSent,
      currentUser,
      tags,
    } = this.props;

    return (
      <CreateCard
        messages={messages}
        formatMessage={formatMessage}
        onFormSubmit={this.onFormSubmit}
        type={currentUser.type}
        data={data}
        isEditing={isEditing}
        getData={this.getData}
        initialValues={initialValues}
        isDataSent={isDataSent}
        tags={tags}
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
  isDataSent: selectIsDataSent,
  address: selectAddress,
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
      editData,
      getDetails,
      editRequest,
      editRedirect,
      dataSendSuccess,
    }
  )(addNewChannelForm)
);
