import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import Search from '../components/Search';

const LoginForm = reduxForm({
  form: 'Search_Form',
})(Search);

export default connect()(LoginForm);
