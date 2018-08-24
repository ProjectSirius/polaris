import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StarRating from '../components/StarRating';
import {
  selectFilteringPageRating,
  selectIsAuth,
  selectCurrentUser,
} from '../selectors';
import { rating, setFilters } from '../actions';
import search from '../actions/data';

let StarRatingContainer = ({
  updRating,
  setFilters,
  search,
  isAuth,
  currentUser,
}) => {
  const onRatingChange = rating => {
    updRating(rating);
    // setFilters();
    search();
  };

  return (
    <StarRating
      onRatingChange={onRatingChange}
      isAuth={isAuth}
      currentUser={currentUser}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  rating: selectFilteringPageRating,
  isAuth: selectIsAuth,
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  updRating: rate => dispatch(rating(rate)),
  setFilters: filter => dispatch(setFilters(filter)),
  search: (dataType, query, filter) =>
    dispatch(search(dataType, query, filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StarRatingContainer);
