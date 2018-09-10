import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { injectIntl, defineMessages } from 'react-intl';

import {
  selectTransaction,
  selectIsRequesting,
  selectError,
} from '../selectors';

import { getTransactions } from '../actions';

import TransactionCards from '../components/TransactionCards/';

const mapStateToProps = createStructuredSelector({
  transactions: selectTransaction,
  isRequesting: selectIsRequesting,
  transError: selectError,
});

class TransactionCardsContainer extends React.Component {
  componentDidMount() {
    const { getTransactions } = this.props;

    getTransactions();
  }

  render() {
    const {
      transactions,
      isRequesting,
      transError,
      intl: { formatMessage },
    } = this.props;

    if (transError) {
      return <strong>{formatMessage(messages.wentWrong)}</strong>;
    }

    return (
      <TransactionCards
        isRequesting={isRequesting}
        transactions={transactions}
        formatMessage={formatMessage}
        messages={messages}
      />
    );
  }
}

const messages = defineMessages({
  loading: {
    id: 'loading',
    defaultMessage: 'Loading',
  },
});

const TransactionCardsContainerIntl = injectIntl(TransactionCardsContainer);

export default connect(
  mapStateToProps,
  {
    getTransactions,
  }
)(TransactionCardsContainerIntl);
