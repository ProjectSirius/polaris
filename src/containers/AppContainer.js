import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import App from '../components/App';

export default withRouter(connect()(App));
