import React from 'react';
import { Card, Loader } from 'semantic-ui-react';

import TransactionCard from './TransactionCard';

const TransactionCards = ({ transactions, isRequesting }) =>
  isRequesting ? (
    <Loader active inline="centered" size="large">
      Loading
    </Loader>
  ) : (
    <Card.Group>
      {transactions.map(({ buyer, price, name }) => (
        <TransactionCard buyer={buyer} price={price} name={name} />
      ))}
    </Card.Group>
  );

export default TransactionCards;
