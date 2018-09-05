import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StarRating from '../components/StarRating';
import {
  selectFilteringPageRating,
  selectIsAuth,
  selectCurrentUser,
} from '../selectors';
import { getData, rating, setFilters } from '../actions';

let StarRatingContainer = ({ updRating, isAuth, currentUser, getData }) => {
  const onRatingChange = (e, data) => {
    updRating(data.rating);

    getData('');
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
  getData: search => dispatch(getData(search)),
});

StarRatingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StarRatingContainer);

export default StarRatingContainer;
