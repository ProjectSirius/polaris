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
      intl: { formatMessage }
    } = this.props;

    if (transError) {
      return <strong>{formatMessage(messages.wentWrong)}</strong>;
    }

    return (
      <TransactionCards
        isRequesting={isRequesting}
        transactions={transactions}
      />
    );
  }
}

const messages = defineMessages({
  wentWrong: {
    id: 'went-wrong',
    defaultMessage: 'Sorry, something went wrong!',
  },
});

const TransactionCardsContainerIntl = injectIntl(TransactionCardsContainer);

TransactionCardsContainer = connect(
  mapStateToProps,
  {
    getTransactions,
  }
)(TransactionCardsContainerIntl);

export default TransactionCardsContainer;
