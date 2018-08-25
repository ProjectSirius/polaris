import React from 'react';
import { Card, Loader } from 'semantic-ui-react';

import TransactionCard from './TransactionCard';

const TransactionCards = ({ classes, transactions, isRequesting }) =>
  isRequesting ? (
    <Loader active inline="centered" size="large">
      Loading
    </Loader>
  ) : (
    <Card.Group className={classes.transactionsWrapper}>
      {transactions.map(({ id, buyer, price, name }) => (
        <TransactionCard key={id} buyer={buyer} price={price} name={name} />
      ))}
    </Card.Group>
  );

export default TransactionCards;
