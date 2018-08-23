import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectTransaction, selectIsRequesting } from '../selectors';

import { getTransactions } from '../actions';

import TransactionCards from '../components/TransactionCards/';

const mapStateToProps = createStructuredSelector({
  transactions: selectTransaction,
  isRequesting: selectIsRequesting,
});

class TransactionCardsContainer extends React.Component {
  componentDidMount() {
    const { getTransactions } = this.props;

    getTransactions();
  }

  render() {
    const { transactions, isRequesting } = this.props;

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
