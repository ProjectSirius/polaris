import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  cart,
  createGroupOffer,
  addToGroupOffer,
  removeFromGroupOffer,
} from '../actions';

import Cart from '../components/Cart';

import {
  selectCart,
  selectIsRequesting,
  selectCurrentUser,
  selectIsGroupOffering,
  groupOffer,
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
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cartData: selectCart,
  isRequesting: selectIsRequesting,
  currentUser: selectCurrentUser,
  isGroupOffering: selectIsGroupOffering,
  groupOffer,
});

export default connect(
  mapStateToProps,
  {
    cart,
    createGroupOffer,
    addToGroupOffer,
    removeFromGroupOffer,
  }
)(CartContainer);
