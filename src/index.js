import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import './index.css';
import 'normalize.css';

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
