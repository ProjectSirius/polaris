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
            key={id}
            price={price}
            name={users[idBuyer] ? users[idBuyer].username : ''}
            idChannel={idChannel}
            users={users}
          />
        );
      })}
    </Card.Group>
  );

export default TransactionCards;
