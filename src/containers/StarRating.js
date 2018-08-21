import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StarRating from '../components/StarRating';
import {
  selectFilteringPageRating,
  selectIsAuth,
  selectCurrentUser,
} from '../selectors';
import { rating, setFilters } from '../actions';
import search from '../actions/data';

const mapStateToProps = createStructuredSelector({
  rating: selectFilteringPageRating,
  isAuth: selectIsAuth,
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  updRating: rate => dispatch(rating(rate)),
  setFilters: filter => dispatch(setFilters(filter)),
  search: (dataType, query, filter) =>
    dispatch(search(dataType, query, filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StarRating);
