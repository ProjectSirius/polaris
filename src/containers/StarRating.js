import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StarRating from '../components/StarRating';
import { selectFilteringPageRating } from '../selectors';
import { rating } from '../actions';

const mapStateToProps = createStructuredSelector({
  selectFilteringPageRating,
});

const mapDispatchToProps = dispatch => ({
  updRating: rate => dispatch(rating(rate)),
});

let StarRatingContainer = ({ updRating, selectFilteringPageRating }) => {
  return (
    <StarRating
      min={1}
      max={5}
      onChange={updRating}
      value={selectFilteringPageRating}
    />
  );
};

StarRatingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StarRatingContainer);

export default StarRatingContainer;
