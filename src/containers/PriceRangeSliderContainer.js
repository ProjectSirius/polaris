import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';

import PriceRangeSlider from '../components/PriceRangeSlider';
import { selectMinPrice, selectMaxPrice } from '../selectors';

const PriceRangeSliderForm = reduxForm({
  form: 'Price_range_form',
  initialValues: {
    min_price_range: 0,
    max_price_range: 100,
  },
  destroyOnUnmount: false,
})(PriceRangeSlider);

const mapStateToProps = createStructuredSelector({
  minPrice: selectMinPrice,
  maxPrice: selectMaxPrice,
});

export default connect(
  mapStateToProps,
  null
)(PriceRangeSliderForm);
