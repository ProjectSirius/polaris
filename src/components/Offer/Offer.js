import React from 'react';
import { Card } from 'semantic-ui-react';
import { injectIntl, defineMessages } from 'react-intl';
import { Link } from 'react-router-dom';

const messages = defineMessages({
  offeredPrice: {
    id: 'offeredPrice',
    defaultMessage: 'Offered price:',
  },
  requiredNumber: {
    id: 'requiredNumber',
    defaultMessage: 'Required number of accepts:',
  },
  accepted: {
    id: 'accepted',
    defaultMessage: 'Accepted',
  },
});

const Offer = ({
  offer: { currentUser, idChannel, price },
  intl: { formatMessage },
}) => {
  return (
    <Card style={{ width: '90%' }}>
      <Card.Content>
        You've been offered to buy{' '}
        <Link
          to={`${
            currentUser === 'audience_owner' ? 'Content' : 'Channel'
          }/${idChannel}`}
        >
          {currentUser === 'audience_owner' ? 'Content' : 'Channel'}
        </Link>
      </Card.Content>
      <Card.Content
        header={`${formatMessage(messages.offeredPrice)} $${price}`}
      />
    </Card>
  );
};

export default injectIntl(Offer);
