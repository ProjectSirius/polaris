import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import PriceRangeSlider from '../components/PriceRangeSlider';

const PriceRangeSliderForm = reduxForm({
  form: 'Price_range_form',
})(PriceRangeSlider);

export default connect(
  null,
  null
)(PriceRangeSliderForm);
