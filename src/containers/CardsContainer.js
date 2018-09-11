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
    this.page = 1;
  }

  componentDidMount() {
    this.props.getData('');

    window.addEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
    const root = document.querySelector('#root');

    if (
      window.innerHeight + window.scrollY >= root.offsetHeight - 500 &&
      this.props.data.currentPage === this.page &&
      this.props.data.totalPages >= this.props.data.currentPage &&
      this.props.data.currentPage !== this.props.data.totalPages
    ) {
      if (this.props.data.currentPage < this.props.data.totalPages) {
        this.page += 1;
      }
      this.props.getData('', this.page);
      return true;
    }
  }

  render() {
    const {
      data,
      isRequesting,
      view,
      lang,
      isGroupOffering,
      addToGroupOffer,
      removeFromCart,
      groupOffer,
      addToCart,
      cart,
      currentUser,
    } = this.props;

    return (
      <Cards
        type={currentUser.type === 'content_owner' ? 'channel' : 'content'}
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
