import React from 'react';
import { Card, Progress } from 'semantic-ui-react';

const Offer = ({ offer: { title, price, id, accepted, options } }) => {
  return (
    <Card style={{ width: '90%' }}>
      <Card.Content header={title} />
      <Card.Content header={`Offered price: $${options.price}`} />
      <Card.Content
        header={`Required number of accepts: ${options.min_accept_number}`}
      />
      <Card.Content>
        <span>Accepted</span>
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

export default Offer;
