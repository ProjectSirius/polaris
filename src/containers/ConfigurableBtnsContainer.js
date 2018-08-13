import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ConfigurableBtns from '../components/ConfigurableBtns';
import { selectFilteringPageFilterBar } from '../selectors/filteringPage';
import { filterBar } from '../actions';

const mapStateToProps = createStructuredSelector({
  selectFilteringPageFilterBar,
});

const mapDispatchToProps = dispatch => ({
  updFilterBar: bar => dispatch(filterBar(bar)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfigurableBtns);
