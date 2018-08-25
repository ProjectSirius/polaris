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
} from '../selectors';

import { getData, addToGroupOffer, removeFromGroupOffer } from '../actions';

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
      removeFromGroupOffer,
      groupOffer,
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
        removeFromGroupOffer={removeFromGroupOffer}
        groupOffer={groupOffer}
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
});

export default connect(
  mapStateToProps,
  {
    getData,
    addToGroupOffer,
    removeFromGroupOffer,
  }
)(CardsContainer);
