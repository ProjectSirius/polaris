import { connect } from 'react-redux';

import { addAddress } from '../actions';

import LocationSearchInput from '../components/LocationSearchInput';

export default connect(
  null,
  {
    addAddress,
  }
)(LocationSearchInput);
