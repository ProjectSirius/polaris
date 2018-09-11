import React from 'react';
import { Tab, Responsive } from 'semantic-ui-react';
import { injectIntl, defineMessages } from 'react-intl';

import TransactionCardsContainer from '../../containers/TransactionCardsContainer';
import OffersListContainer from '../../containers/OffersListContainer';
import DashboardCardsContainer from '../../containers/DashboardCardsContainer';

const TabMenu = ({ currentUser, intl: { formatMessage } }) => {
  const panes = [
    {
      menuItem:
        currentUser.type === 'audience_owner' ?
          formatMessage(messages.myChannels) :
          formatMessage(messages.myContents),
      render: () => (
        <Tab.Pane>
          <DashboardCardsContainer />
        </Tab.Pane>
      ),
    },
    { menuItem: formatMessage(messages.offers), render: () => <OffersListContainer /> },
    {
      menuItem:  formatMessage(messages.transactions),
      render: () => (
        <Tab.Pane>
          <TransactionCardsContainer />
        </Tab.Pane>
      ),
    },
    { menuItem: formatMessage(messages.payments), render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
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

const TabMenuIntl = injectIntl(TabMenu);

const messages = defineMessages({
  myChannels: {
    id: 'my-channels',
    defaultMessage: 'My Channels',
  },
  myContents: {
    id: 'my-contents',
    defaultMessage: 'My Contents',
  },
  offers: {
    id: 'offers',
    defaultMessage: 'Offers'
  },
  transactions: {
    id: 'transactions',
    defaultMessage: 'Transactions'
  },
  payments: {
    id: 'payments',
    defaultMessage: 'Payments'
  }
});

export default TabMenuIntl;
