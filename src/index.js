import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import './index.css';
import 'normalize.css';
import RootContainer from './containers/RootContainer';

const store = configureStore();

ReactDOM.render(
  <RootContainer store={store} />,
  document.getElementById('root')
);
registerServiceWorker();
