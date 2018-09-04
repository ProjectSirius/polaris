import React from 'react';
import { Tab, Responsive } from 'semantic-ui-react';

import TransactionCardsContainer from '../../containers/TransactionCardsContainer';
import OffersListContainer from '../../containers/OffersListContainer';
import DashboardCardsContainer from '../../containers/DashboardCardsContainer';

const TabMenu = ({ currentUser }) => {
  const panes = [
    {
      menuItem:
        currentUser.type === 'audience_owner' ? 'My Channels' : 'My Contents',
      render: () => (
        <Tab.Pane>
          <DashboardCardsContainer />
        </Tab.Pane>
      ),
    },
    { menuItem: 'Offers', render: () => <OffersListContainer /> },
    {
      menuItem: 'Transactions',
      render: () => (
        <Tab.Pane>
          <TransactionCardsContainer />
        </Tab.Pane>
      ),
    },
    { menuItem: 'Payment', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  ];

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

export default TabMenu;
