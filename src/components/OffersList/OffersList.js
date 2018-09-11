import React from 'react';
import { Loader } from 'semantic-ui-react';
import Offer from '../Offer';

const OffersList = ({
  offers,
  currentUser,
  isRequesting,
  formatMessage,
  messages,
}) => {
  return isRequesting ? (
    <Loader active inline="centered" size="large">
      {formatMessage(messages.loading)}
    </Loader>
  ) : (
    <div>
      {offers.map(offer => (
        <Offer currentUser={currentUser} key={offer.id} offer={offer} />
      ))}
    </div>
  );
};

export default OffersList;
