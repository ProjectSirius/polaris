import React from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import { getDetails, edit } from '../actions';

import {
  selectDetailed,
  selectIsRequesting,
  selectLanguage,
  selectCurrentUser,
} from '../selectors';

import DetailedPage from '../components/DetailedPage';

import messages from '../helpers/DetailsPageMessages';

class DetailsPageContainer extends React.Component {
  componentDidMount() {
    const dataType =
      this.props.currentUser.userType === 'audience_owner'
        ? 'channels'
        : 'contents';
    const id = this.props.match.params.id;

    this.props.getDetails(dataType, id);
  }

  handleEdit = () => {
    this.props.edit();
  };

  render() {
    const {
      intl: { formatMessage },
      isRequesting,
      detailed,
      lang,
      currentUser,
    } = this.props;

    return (
      <DetailedPage
        data={detailed}
        isRequesting={isRequesting}
        lang={lang}
        handleEdit={this.handleEdit}
        userType={currentUser.userType}
        messages={messages}
        formatMessage={formatMessage}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  detailed: selectDetailed,
  isRequesting: selectIsRequesting,
  lang: selectLanguage,
  currentUser: selectCurrentUser,
});

DetailsPageContainer = injectIntl(DetailsPageContainer);

export default connect(
  mapStateToProps,
  {
    getDetails,
    edit,
  }
)(DetailsPageContainer);
