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
  offerMessage: {
    id: 'offer-message',
    defaultMessage: " You've sent an offer to buy this",
  },
});

const Offer = ({
  offer: { currentUser, idChannel, price },
  intl: { formatMessage },
  lang,
  classes,
}) => {
  return (
    <Card style={{ width: '90%' }}>
      <Card.Content>
        {formatMessage(messages.offerMessage)}
        <Link
          to={{
            pathname: `${
              currentUser === 'audience_owner' ? 'content' : 'channel'
            }/${idChannel}`,
            search: `?locale=${lang}`,
          }}
          className={classes.link}
        >
          {currentUser === 'audience_owner' ? 'content' : 'channel'}
        </Link>
      </Card.Content>
      <Card.Content
        header={`${formatMessage(messages.offeredPrice)} $${price}`}
      />
    </Card>
  );
};

export default injectIntl(Offer);
