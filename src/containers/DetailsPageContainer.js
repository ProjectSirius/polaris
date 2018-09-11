import React from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { getDetails, editRequest, delData, sendOffer } from '../actions';

import {
  selectDetails,
  selectIsRequesting,
  selectLanguage,
  selectCurrentUser,
  selectSuccessMessage,
} from '../selectors';

import DetailedPage from '../components/DetailsPage';

import messages from '../helpers/detailsPageMessages';

class DetailsPageContainer extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getDetails(this.props.location.pathname.split('/')[1], id);
  }

  handleEdit = () => {
    this.props.editRequest();
  };

  handleSendOffer = data => {
    this.props.sendOffer(data);
  };

  render() {
    const {
      intl: { formatMessage },
      isRequesting,
      details,
      lang,
      currentUser,
      delData,
      sendOffer,
      location,
      successMessage,
    } = this.props;
    return (
      <DetailedPage
        data={details}
        isRequesting={isRequesting}
        lang={lang}
        handleEdit={this.handleEdit}
        userType={currentUser.type}
        messages={messages}
        formatMessage={formatMessage}
        currentUser={currentUser}
        delData={delData}
        sendOffer={sendOffer}
        location={location}
        handleSendOffer={this.handleSendOffer}
        successMessage={successMessage}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  details: selectDetails,
  isRequesting: selectIsRequesting,
  lang: selectLanguage,
  currentUser: selectCurrentUser,
  successMessage: selectSuccessMessage,
});

DetailsPageContainer = withRouter(injectIntl(DetailsPageContainer));

export default connect(
  mapStateToProps,
  {
    getDetails,
    editRequest,
    delData,
    sendOffer,
  }
)(DetailsPageContainer);
