import React from 'react';
import { Button, Card } from 'semantic-ui-react';
import { injectIntl, defineMessages } from 'react-intl';
import { Link } from 'react-router-dom';

const messages = defineMessages({
  payment: {
    id: 'payment',
    defaultMessage: 'Payment',
  },
  wantsToBuyYourChannel: {
    id: 'wants-to-buy-your-channel',
    defaultMessage: 'wants to buy your',
  },

  channel: {
    id: 'channel',
    defaultMessage: 'channel',
  },
  by: {
    id: 'by',
    defaultMessage: 'by',
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
  name,
  price,
  idChannel,
  approveOffer,
  intl: { formatMessage },
}) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{formatMessage(messages.payment)}</Card.Meta>
        <Card.Description>
          {name} {formatMessage(messages.wantsToBuyYourChannel)}{' '}
          <Link to={`channel/${idChannel}`}>
            {formatMessage(messages.channel)}{' '}
          </Link>
          {formatMessage(messages.by)} <strong>{price}$</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button onClick={approveOffer} basic color="green">
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
