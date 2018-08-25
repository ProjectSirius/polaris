import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'normalize.css';
import RootContainer from './containers/RootContainer';
import store from './store';

ReactDOM.render(
  <RootContainer store={store} />,
  document.getElementById('root')
);
registerServiceWorker();
