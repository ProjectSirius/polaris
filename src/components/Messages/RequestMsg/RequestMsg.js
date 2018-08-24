import React from 'react';
import { Message, Icon } from 'semantic-ui-react';

const RequestMsg = ({ msgHeader = 'Just one second', msgBody }) => (
  <Message icon>
    <Icon name="circle notched" loading />
    <Message.Content>
      <Message.Header>{msgHeader}</Message.Header>
      {msgBody}
    </Message.Content>
  </Message>
);

export default RequestMsg;
