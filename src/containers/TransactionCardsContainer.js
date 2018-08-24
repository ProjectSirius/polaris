import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

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
    const { transactions, isRequesting, transError } = this.props;

    if (transError) {
      return <strong>Sorry, something went wrong!</strong>;
    }

    return (
      <TransactionCards
        isRequesting={isRequesting}
        transactions={transactions}
      />
    );
  }
}

TransactionCardsContainer = connect(
  mapStateToProps,
  {
    getTransactions,
  }
)(TransactionCardsContainer);

export default TransactionCardsContainer;
