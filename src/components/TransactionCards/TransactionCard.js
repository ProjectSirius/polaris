import React from 'react';
import { Button, Card } from 'semantic-ui-react';

const TransactionCard = ({ isRequesting, name, price }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>Payment</Card.Meta>
        <Card.Description>
          {name} wants to buy your channel by <strong>{price}$</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            Approve
          </Button>
          <Button basic color="red">
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default TransactionCard;
