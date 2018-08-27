import React from 'react';
import { Tab, Responsive } from 'semantic-ui-react';

import TransactionCardsContainer from '../../containers/TransactionCardsContainer';

const panes = [
  {
    menuItem: 'Transactions',
    render: () => <TransactionCardsContainer />,
  },
  { menuItem: 'Payment', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'My Channels', render: () => <Tab.Pane>My channels</Tab.Pane> },
  { menuItem: 'Offers', render: () => <Tab.Pane>My offers</Tab.Pane> },
];

const TabExampleVerticalTabular = () => {
  return (
    <React.Fragment>
      <Responsive minWidth="768">
        <Tab
          menu={{ fluid: true, vertical: true, tabular: true }}
          panes={panes}
        />
      </Responsive>
      <Responsive maxWidth="768">
        <Tab
          menu={{ fluid: true, vertical: false, tabular: true }}
          panes={panes}
        />
      </Responsive>
    </React.Fragment>
  );
};

export default TabExampleVerticalTabular;
