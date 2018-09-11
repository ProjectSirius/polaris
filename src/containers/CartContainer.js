import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { injectIntl, defineMessages } from 'react-intl';
import { withRouter } from 'react-router-dom';

import {
  cart,
  createGroupOffer,
  addToGroupOffer,
  removeFromGroupOffer,
  sendOffer,
} from '../actions';

import Cart from '../components/Cart';

import {
  selectCart,
  selectIsRequesting,
  selectCurrentUser,
  selectIsGroupOffering,
  groupOffer,
  selectSuccessMessage,
} from '../selectors';

class CartContainer extends React.Component {
  componentDidMount() {
    this.props.cart();
  }

  render() {
    const {
      cartData,
      isRequesting,
      currentUser,
      isGroupOffering,
      createGroupOffer,
      addToGroupOffer,
      removeFromGroupOffer,
      groupOffer,
      sendOffer,
      successMessage,
      intl: { formatMessage },
      location,
    } = this.props;
    return (
      <Cart
        cart={cartData.cartData}
        isRequesting={isRequesting}
        type={currentUser.type}
        isGroupOffering={isGroupOffering}
        createGroupOffer={createGroupOffer}
        addToGroupOffer={addToGroupOffer}
        removeFromGroupOffer={removeFromGroupOffer}
        groupOffer={groupOffer}
        formatMessage={formatMessage}
        messages={messages}
        sendOffer={sendOffer}
        location={location}
        successMessage={successMessage}
      />
    );
  }
}

const messages = defineMessages({
  loading: {
    id: 'loading',
    defaultMessage: 'Loading',
  },
  emptyCartMessage: {
    id: 'empty-cart-message',
    defaultMessage: 'Your cart is empty',
  },
  emptyCartSubMessage: {
    id: 'empty-cart-sub-message',
    defaultMessage: 'Add something to make me happy :)',
  },
  makeGroupOffer: {
    id: 'make-group-offer',
    defaultMessage: 'Make group offer',
  },
  createGroupOffer: {
    id: 'create-group-offer',
    defaultMessage: 'Create group offer',
  },
  makeSingleOffer: {
    id: 'make-single-offer',
    defaultMessage: 'Make single offer',
  },
});

const CartContainerIntl = withRouter(injectIntl(CartContainer));

const mapStateToProps = createStructuredSelector({
  cartData: selectCart,
  isRequesting: selectIsRequesting,
  currentUser: selectCurrentUser,
  isGroupOffering: selectIsGroupOffering,
  groupOffer,
  successMessage: selectSuccessMessage,
});

export default withRouter(
  connect(
    mapStateToProps,
    {
      cart,
      createGroupOffer,
      addToGroupOffer,
      removeFromGroupOffer,
      sendOffer,
    }
  )(CartContainerIntl)
);
