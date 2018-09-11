import { connect } from 'react-redux';

import SuccessAlert from '../components/SuccessAlert';

import { removeFromCart } from '../actions';

import { createStructuredSelector } from 'reselect';

import { selectLastOfferedId } from '../selectors';

const mapStateToProps = createStructuredSelector({
  lastOfferedId: selectLastOfferedId,
});

export default connect(
  mapStateToProps,
  {
    removeFromCart,
  }
)(SuccessAlert);
