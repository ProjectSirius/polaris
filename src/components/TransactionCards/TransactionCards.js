import React from 'react';
import { Card, Loader } from 'semantic-ui-react';

import TransactionCard from './TransactionCard';

const TransactionCards = ({
  classes,
  transactions,
  isRequesting,
  formatMessage,
  messages,
  users,
  approveOffer,
  approveDecline,
  declineOffer,
}) =>
  isRequesting ? (
    <Loader active inline="centered" size="large">
      {formatMessage(messages.loading)}
    </Loader>
  ) : (
    <Card.Group className={classes.transactionsWrapper}>
      {transactions.map(({ id, idBuyer, price, name, idChannel }) => {
        return (
          <TransactionCard
            approveDecline={approveDecline}
            key={id}
            price={price}
            name={users[idBuyer] ? users[idBuyer].username : ''}
            idChannel={idChannel}
            users={users}
            approveOffer={approveOffer}
            declineOffer={declineOffer}
          />
        );
      })}
    </Card.Group>
  );

export default TransactionCards;
