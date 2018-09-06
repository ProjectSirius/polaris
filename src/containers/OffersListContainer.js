import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { injectIntl, defineMessages } from 'react-intl';

import { selectOffers, selectIsRequesting } from '../selectors';

import { getOffers } from '../actions';

import OffersList from '../components/OffersList';

const mapStateToProps = createStructuredSelector({
  offers: selectOffers,
  isRequesting: selectIsRequesting,
});

class OffersListContainer extends React.Component {
  componentDidMount() {
    const { getOffers } = this.props;

    getOffers();
  }

  render() {
    const { offers, isRequesting, intl: { formatMessage } } = this.props;

    return <OffersList
      isRequesting={isRequesting}
      offers={offers}
      formatMessage={formatMessage}
      messages={messages}
    />;
  }
}

const messages = defineMessages({
  loading: {
    id: 'loading',
    defaultMessage: 'Loading',
  }
});

const OffersListContainerIntl = injectIntl(OffersListContainer);

export default connect(
  mapStateToProps,
  {
    getOffers,
  }
)(OffersListContainerIntl);
