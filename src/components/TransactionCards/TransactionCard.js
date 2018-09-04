import React from 'react';
import { Button, Card } from 'semantic-ui-react';
import { injectIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
  payment: {
    id: 'payment',
    defaultMessage: 'Payment',
  },
  wantsToBuyYourChannel: {
    id: 'wants-to-buy-your-channel',
    defaultMessage: 'wants to buy your channel by',
  },
  approve: {
    id: 'approve',
    defaultMessage: 'Approve',
  },
  decline: {
    id: 'decline',
    defaultMessage: 'Decline',
  },
});

const TransactionCard = ({
  isRequesting,
  name,
  price,
  intl: { formatMessage }
}) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{formatMessage(messages.payment)}</Card.Meta>
        <Card.Description>
          {name} {formatMessage(messages.wantsToBuyYourChannel)} <strong>{price}$</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            {formatMessage(messages.approve)}
          </Button>
          <Button basic color="red">
            {formatMessage(messages.decline)}
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default injectIntl(TransactionCard);
