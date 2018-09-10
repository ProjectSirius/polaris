import React from 'react';
import { Card } from 'semantic-ui-react';
import { injectIntl, defineMessages } from 'react-intl';

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

const Offer = ({ offer: { title, price }, intl: { formatMessage } }) => {
  return (
    <Card style={{ width: '90%' }}>
      <Card.Content header={title} />
      <Card.Content
        header={`${formatMessage(messages.offeredPrice)} $${price}`}
      />
    </Card>
  );
};

export default injectIntl(Offer);
