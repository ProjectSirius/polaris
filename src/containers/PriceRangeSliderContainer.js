import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';

import {
  selectIsAuth,
  selectCurrentUser,
  selectMinPrice,
  selectMaxPrice,
} from '../selectors';

import search from '../actions/data';
import { setFilters } from '../actions';

import PriceRangeSlider from '../components/PriceRangeSlider';

const PriceRangeSliderContainer = ({
  currentUser,
  isAuth,
  search,
  minPrice,
  maxPrice,
}) => {
  const handleChange = () => {
    search('', 1, 'search');
  };

  return (
    <PriceRangeSlider
      handleChange={handleChange}
      currentUser={currentUser}
      isAuth={isAuth}
      minPrice={minPrice}
      maxPrice={maxPrice}
    />
  );
};

const PriceRangeSliderForm = reduxForm({
  form: 'Price_range_form',
  initialValues: {
    min_price_range: 1,
    max_price_range: 10000,
  },
  destroyOnUnmount: false,
})(PriceRangeSliderContainer);

const mapStateToProps = createStructuredSelector({
  isAuth: selectIsAuth,
  currentUser: selectCurrentUser,
  minPrice: selectMinPrice,
  maxPrice: selectMaxPrice,
});

export default connect(
  mapStateToProps,
  {
    search,
    setFilters,
  }
)(PriceRangeSliderForm);
