import React from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import { getDetails, editRequest, delData } from '../actions';

import {
  selectDetails,
  selectIsRequesting,
  selectLanguage,
  selectCurrentUser,
} from '../selectors';

import DetailedPage from '../components/DetailsPage';

import messages from '../helpers/detailsPageMessages';

class DetailsPageContainer extends React.Component {
  componentDidMount() {
    const dataType =
      this.props.currentUser.type === 'audience_owner'
        ? 'channels'
        : 'contents';
    const id = this.props.match.params.id;
    this.props.getDetails(dataType, id);
  }

  handleEdit = () => {
    this.props.editRequest();
  };

  render() {
    const {
      intl: { formatMessage },
      isRequesting,
      details,
      lang,
      currentUser,
      delData,
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
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  details: selectDetails,
  isRequesting: selectIsRequesting,
  lang: selectLanguage,
  currentUser: selectCurrentUser,
});

DetailsPageContainer = injectIntl(DetailsPageContainer);

export default connect(
  mapStateToProps,
  {
    getDetails,
    editRequest,
    delData,
  }
)(DetailsPageContainer);
