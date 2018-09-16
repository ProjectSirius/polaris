import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import {
  selectIsRequesting,
  selectTags,
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
  deleteAllTags,
} from '../actions';
import editData, { editRedirect } from '../actions/edit';
import { dataSendSuccess } from '../actions/sendData';

import CreateCard from '../components/CreateCard';

import channelFormValidate from '../helpers/channelFormValidate';
import messages from '../helpers/contentChannelFormMessages';

class CreateContentContainer extends Component {
  componentDidMount() {
    const dataType = 'content';

    if (this.props.match.path.split('/').includes('edit')) {
      const id = this.props.match.params.id;
      this.props.getDetails(dataType, id);
      this.props.editRequest();
    } else {
      this.props.deleteAllTags();
    }
  }

  getData = () => {
    const id = this.props.match.params.id;

    this.props.getDetails('content', id);
  };

  onFormSubmit = formData => {
    const tags = this.props.tags;

    if (this.props.history.location.pathname.includes('edit')) {
      this.props.editData({ ...formData, tags });
      this.props.history.push('/dashboard');
    } else {
      this.props.sendData({ ...formData, tags }, 'createContent');
      this.props.dataSendSuccess();
    }
  };

  render() {
    const {
      intl: { formatMessage },
      isEditing,
      data,
      isDataSent,
      currentUser,
      tags,
    } = this.props;

    return (
      <CreateCard
        messages={messages}
        type={currentUser.type}
        onFormSubmit={this.onFormSubmit}
        formatMessage={formatMessage}
        getData={this.getData}
        data={data}
        isEditing={isEditing}
        isDataSent={isDataSent}
        tags={tags}
        {...this.props}
      />
    );
  }
}

CreateContentContainer = injectIntl(CreateContentContainer);

const mapStateToProps = createStructuredSelector({
  isRequesting: selectIsRequesting,
  tags: selectTags,
  data: selectDetails,
  isEditing: selectIsEditing,
  initialValues: selectEditDetails,
  isDataSent: selectIsDataSent,
  currentUser: selectCurrentUser,
  address: selectAddress,
});

const addNewContentForm = withRouter(
  reduxForm({
    form: 'Add_new_content_form',
    validate: channelFormValidate,
    enableReinitialize: true,
  })(CreateContentContainer)
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
      editRedirect,
      dataSendSuccess,
      editRequest,
      deleteAllTags,
    }
  )(addNewContentForm)
);
