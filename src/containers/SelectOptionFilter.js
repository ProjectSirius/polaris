import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import SelectOptionFilter from '../components/SelectOptionFilter';

const SelectOptionFilterForm = reduxForm({
  form: 'SelectOptionFilter_form',
  destroyOnUnmount: false,
})(SelectOptionFilter);

export default connect(
  null,
  null
)(SelectOptionFilterForm);
