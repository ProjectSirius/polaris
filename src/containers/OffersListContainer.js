import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

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
    const { offers, isRequesting } = this.props;

    return <OffersList isRequesting={isRequesting} offers={offers} />;
  }
}

OffersListContainer = connect(
  mapStateToProps,
  {
    getOffers,
  }
)(OffersListContainer);

export default OffersListContainer;
