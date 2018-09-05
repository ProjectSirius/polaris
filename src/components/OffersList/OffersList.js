import React from 'react';
import { Loader } from 'semantic-ui-react';
import Offer from '../Offer';

const OffersList = ({ offers, isRequesting }) => {
  return isRequesting ? (
    <Loader active inline="centered" size="large">
      Loading
    </Loader>
  ) : (
    <div>
      {offers.map(offer => (
        <Offer key={offer.id} offer={offer} />
      ))}
    </div>
  );
};

export default OffersList;
