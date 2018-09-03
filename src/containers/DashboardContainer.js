import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Dashboard from '../components/Dashboard';
import { selectCurrentUser } from '../selectors';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Dashboard);
