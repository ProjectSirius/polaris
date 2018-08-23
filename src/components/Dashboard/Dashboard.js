import React from 'react';
import { Tab } from 'semantic-ui-react';
import TransactionCards from '../TransactionCards';

const panes = [
  {
    menuItem: 'Transactions',
    render: () => <TransactionCards />,
  },
  { menuItem: 'Payment', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'My Channels', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
];

const TabExampleVerticalTabular = () => (
  <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
);

export default TabExampleVerticalTabular;
