import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { injectIntl, defineMessages } from 'react-intl';

import {
  selectOffers,
  selectIsRequesting,
  selectCurrentUser,
  selectLanguage,
} from '../selectors';

import { getOffers } from '../actions';

import OffersList from '../components/OffersList';

const mapStateToProps = createStructuredSelector({
  offers: selectOffers,
  isRequesting: selectIsRequesting,
  currentUser: selectCurrentUser,
  lang: selectLanguage,
});

class OffersListContainer extends React.Component {
  componentDidMount() {
    const { getOffers } = this.props;

    getOffers();
  }

  render() {
    const {
      offers,
      isRequesting,
      currentUser,
      intl: { formatMessage },
      lang,
    } = this.props;

    return (
      <OffersList
        isRequesting={isRequesting}
        offers={offers}
        formatMessage={formatMessage}
        messages={messages}
        currentUser={currentUser}
        lang={lang}
      />
    );
  }
}

const messages = defineMessages({
  loading: {
    id: 'loading',
    defaultMessage: 'Loading',
  },
});

const OffersListContainerIntl = injectIntl(OffersListContainer);

export default connect(
  mapStateToProps,
  {
    getOffers,
  }
)(OffersListContainerIntl);
