import { connect } from 'react-redux';

import SelectLanguages from '../components/SelectLanguages';
import { changeLang } from '../actions/index';

export default connect(
  null,
  { changeLang }
)(SelectLanguages);
