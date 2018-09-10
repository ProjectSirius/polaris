import React from 'react';
import { Card, Loader } from 'semantic-ui-react';

import TransactionCard from './TransactionCard';

const TransactionCards = ({
  classes,
  transactions,
  isRequesting,
  formatMessage,
  messages,
}) =>
  isRequesting ? (
    <Loader active inline="centered" size="large">
      {formatMessage(messages.loading)}
    </Loader>
  ) : (
    <Card.Group className={classes.transactionsWrapper}>
      {transactions.map(({ id, buyer, price, name, idChannel }) => (
        <TransactionCard
          key={id}
          buyer={buyer}
          price={price}
          name={name}
          idChannel={idChannel}
        />
      ))}
    </Card.Group>
  );

export default TransactionCards;
