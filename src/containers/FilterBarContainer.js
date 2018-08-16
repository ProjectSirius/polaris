import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import FilterBar from '../components/FilterBar';
import { filterMenu } from '../actions/';

import { selectIsOpenFilterMenu } from '../selectors';

const mapStateToProps = createStructuredSelector({
  isOpen: selectIsOpenFilterMenu,
});

const mapDispatchToProps = dispatch => ({
  toggleMenu: isOpen => dispatch(filterMenu(isOpen)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBar);
