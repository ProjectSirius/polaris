import React from 'react';
import { Card } from 'semantic-ui-react';

import TransactionCard from './TransactionCard';

const TransactionCards = ({ transactions }) => (
  <Card.Group>
    {transactions.map(({ isRequesting, buyer, price, name }) => (
      <TransactionCard
        isRequesting={isRequesting}
        buyer={buyer}
        price={price}
        name={name}
      />
    ))}
  </Card.Group>
);

export default TransactionCards;
