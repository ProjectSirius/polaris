import React from 'react';
import { Message, Icon } from 'semantic-ui-react';

const NegativeMessage = ({
  msgHeader,
  msgBody = 'Try again in a few seconds!',
}) => (
  <Message icon negative>
    <Icon name="redo" />
    <Message.Content>
      <Message.Header>{msgHeader}</Message.Header>
      {msgBody}
    </Message.Content>
  </Message>
);

export default NegativeMessage;
