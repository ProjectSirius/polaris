import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import {
  selectDetails,
  selectIsEditing,
  selectIsRequesting,
  selectTags,
  selectEditDetails,
  selectIsDataSent,
  selectCurrentUser,
  selectAddress,
} from '../selectors';

import { addTags, removeTags, sendData, getDetails } from '../actions';
import editData, { editRedirect } from '../actions/edit';
import { dataSendSuccess } from '../actions/sendData';

import CreateCard from '../components/CreateCard';

import channelFormValidate from '../helpers/channelFormValidate';
import messages from '../helpers/contentChannelFormMessages';

class CreateContentContainer extends Component {
  componentDidMount() {
    const dataType = 'contents';
    const id = this.props.match.params.id;

    this.props.getDetails(dataType, id);
  }

  getData = () => {
    const id = this.props.match.params.id;

    this.props.getDetails('contents', id);
  };

  onFormSubmit = formData => {
    if (this.props.history.location.pathname.includes('edit')) {
      this.props.editData({ ...formData, ...this.props.address });
    } else {
      this.props.sendData(
        { ...formData, ...this.props.address },
        'createContent'
      );
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
    }
  )(addNewContentForm)
);
