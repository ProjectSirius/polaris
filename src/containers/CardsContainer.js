import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectData,
  selectIsRequesting,
  selectIsAuth,
  selectCurrentUser,
  selectFilteringPageFilterBar,
  selectLanguage,
  selectIsGroupOffering,
  groupOffer,
  selectCart,
} from '../selectors';

import {
  getData,
  addToGroupOffer,
  addToCart,
  removeFromCart,
} from '../actions';

import Cards from '../components/Cards';

class CardsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    this.props.getData('');

    window.addEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 500
    ) {
      return true;
    }
  }

  render() {
    const {
      data,
      isRequesting,
      view,
      type,
      lang,
      isGroupOffering,
      addToGroupOffer,
      removeFromCart,
      groupOffer,
      addToCart,
      cart,
    } = this.props;

    return (
      <Cards
        type={type}
        data={data}
        isRequesting={isRequesting}
        view={view}
        lang={lang}
        isGroupOffering={isGroupOffering}
        addToGroupOffer={addToGroupOffer}
        removeFromCart={removeFromCart}
        groupOffer={groupOffer}
        addToCart={addToCart}
        cart={cart}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  data: selectData,
  isRequesting: selectIsRequesting,
  isAuth: selectIsAuth,
  currentUser: selectCurrentUser,
  view: selectFilteringPageFilterBar,
  lang: selectLanguage,
  isGroupOffering: selectIsGroupOffering,
  groupOffer,
  cart: selectCart,
});

export default connect(
  mapStateToProps,
  {
    getData,
    addToGroupOffer,
    removeFromCart,
    addToCart,
  }
)(CardsContainer);
