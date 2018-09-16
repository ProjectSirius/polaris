import React from 'react';
import { Loader } from 'semantic-ui-react';
import Offer from '../Offer';

const OffersList = ({
  offers,
  currentUser,
  isRequesting,
  formatMessage,
  messages,
  classes,
}) => {
  return isRequesting ? (
    <Loader active inline="centered" size="large">
      {formatMessage(messages.loading)}
    </Loader>
  ) : (
    <div>
      {offers.length === 0 ? (
        <div className={classes.emptyOffer}>
          <h2>There are no offers yet</h2>
          <span>Work hard and you shall be rewarded :)</span>
        </div>
      ) : (
        offers.map(offer => (
          <Offer currentUser={currentUser} key={offer.id} offer={offer} />
        ))
      )}
    </div>
  );
};

export default OffersList;
