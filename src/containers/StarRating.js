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

let StarRatingContainer = ({
  updRating,
  setFilters,
  search,
  isAuth,
  currentUser,
}) => {
  const handleChange = (dataType, query, filter, rating) => {
    updRating(rating);
    setFilters(filter);
    search(dataType, query);
  };

  return (
    <StarRating
      max={5}
      onChange={handleChange}
      isAuth={isAuth}
      currentUser={currentUser}
    />
  );
};

StarRatingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StarRatingContainer);

export default StarRatingContainer;
