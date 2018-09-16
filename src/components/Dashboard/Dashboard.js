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
        currentUser.type === 'audience_owner'
          ? formatMessage(messages.myChannels)
          : formatMessage(messages.myContents),
      render: () => (
        <Tab.Pane>
          <DashboardCardsContainer />
        </Tab.Pane>
      ),
    },
    {
      menuItem: formatMessage(messages.offers),
      render: () => <OffersListContainer />,
    },
    {
      menuItem: formatMessage(messages.transactions),
      render: () => (
        <Tab.Pane>
          <TransactionCardsContainer />
        </Tab.Pane>
      ),
    },
    {
      menuItem: formatMessage(messages.payments),
      render: () => (
        <Tab.Pane>
          <div
            style={{
              display: 'flex',
              height: '16vh',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '34px',
              color: '#5ebba6',
              fontWeight: 600,
            }}
          >
            {formatMessage(messages.paymentMessage)}
          </div>
        </Tab.Pane>
      ),
    },
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
    defaultMessage: 'Offers',
  },
  transactions: {
    id: 'transactions',
    defaultMessage: 'Transactions',
  },
  payments: {
    id: 'payments',
    defaultMessage: 'Payments',
  },
  paymentMessage: {
    id: 'payment-message',
    defaultMessage: 'Payment is coming soon',
  },
});

export default TabMenuIntl;
