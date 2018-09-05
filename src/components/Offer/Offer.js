import React from 'react';
import { Card, Progress } from 'semantic-ui-react';
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
    defaultMessage: 'Accepted'
  }
});

const Offer = ({ offer: { title, price, id, accepted, options }, intl: { formatMessage } }) => {
  return (
    <Card style={{ width: '90%' }}>
      <Card.Content header={title} />
      <Card.Content header={`${formatMessage(messages.offeredPrice)} $${options.price}`} />
      <Card.Content
        header={`${formatMessage(messages.requiredNumber)} ${options.min_accept_number}`}
      />
      <Card.Content>
        <span>{formatMessage(messages.accepted)}</span>
        <Progress
          percent={(100 / accepted) | 0}
          inverted
          color="green"
          progress
        />
      </Card.Content>
    </Card>
  );
};

export default injectIntl(Offer);