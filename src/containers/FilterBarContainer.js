import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import FilterBar from '../components/FilterBar';
import { filterMenu, groupOffer } from '../actions/';

import { selectIsOpenFilterMenu } from '../selectors';

const mapStateToProps = createStructuredSelector({
  isOpen: selectIsOpenFilterMenu,
});

export default connect(
  mapStateToProps,
  {
    toggleMenu: filterMenu,
    groupOffer,
  }
)(FilterBar);
