import { connect } from 'react-redux';
import AuthButtons from '../components/AuthButtons';
import { createStructuredSelector } from 'reselect';

import { selectLanguage } from '../selectors';

const mapStateToProps = createStructuredSelector({
  lang: selectLanguage,
});

export default connect(
  mapStateToProps,
  null
)(AuthButtons);
