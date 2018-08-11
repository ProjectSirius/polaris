import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import PriceRangeSlider from '../components/PriceRangeSlider';

const PriceRangeSliderForm = reduxForm({
  form: 'Price_range_form',
  initialValues: {
    min_price_range: 0,
    max_price_range: 100,
  },
})(PriceRangeSlider);

export default connect(
  null,
  null
)(PriceRangeSliderForm);
