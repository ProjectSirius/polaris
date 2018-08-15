import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';

import { selectIsAuth, selectCurrentUser } from '../selectors';

import search from '../actions/data';

import PriceRangeSlider from '../components/PriceRangeSlider';

const PriceRangeSliderContainer = ({ currentUser, isAuth }) => {
  const handleChange = (dataType, query, filter) => {
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

const mapDispatchToProps = dispatch => ({
  search: (dataType, query, filter) =>
    dispatch(search(dataType, query, filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PriceRangeSliderForm);
