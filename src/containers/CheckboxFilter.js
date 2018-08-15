import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import CheckboxFilter from '../components/CheckboxFilter';

const CheckboxFilterForm = reduxForm({
  form: 'CheckboxFilter_form',
  initialValues: {
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  },
  destroyOnUnmount: false,
})(CheckboxFilter);

export default connect(
  null,
  null
)(CheckboxFilterForm);
