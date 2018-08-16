import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';

import { selectIsAuth, selectCurrentUser } from '../selectors';

import search from '../actions/data';
import { setFilters } from '../actions';

import PriceRangeSlider from '../components/PriceRangeSlider';

const PriceRangeSliderContainer = ({
  currentUser,
  isAuth,
  search,
  setFilters,
}) => {
  const handleChange = (dataType, query, filter) => {
    setFilters(filter);
    search(dataType, query, filter);
  };

  return (
    <PriceRangeSlider
      handleChange={handleChange}
      currentUser={currentUser}
      isAuth={isAuth}
    />
  );
};

const PriceRangeSliderForm = reduxForm({
  form: 'Price_range_form',
  initialValues: {
    min_price_range: 0,
    max_price_range: 100,
  },
  destroyOnUnmount: false,
})(PriceRangeSliderContainer);

const mapStateToProps = createStructuredSelector({
  isAuth: selectIsAuth,
  currentUser: selectCurrentUser,
});

export default connect(
  mapStateToProps,
  {
    search,
    setFilters,
  }
)(PriceRangeSliderForm);
