import React from 'react';
import { Tab, Responsive } from 'semantic-ui-react';

import TransactionCardsContainer from '../../containers/TransactionCardsContainer';
import DashboardCardsContainer from '../../containers/DashboardCardsContainer';

const panes = [
  {
    menuItem: 'Transactions',
    render: () => (
      <Tab.Pane>
        <TransactionCardsContainer />
      </Tab.Pane>
    ),
  },
  { menuItem: 'Payment', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  {
    menuItem: 'My Channels',
    render: () => (
      <Tab.Pane>
        <DashboardCardsContainer />
      </Tab.Pane>
    ),
  },
];

const TabExampleVerticalTabular = props => {
  panes[2].menuItem =
    props.type.type === 'content-owner' ? 'My Channels' : 'My Contents'; //cheng to normal code!
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
