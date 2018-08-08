import { createStore, applyMiddleware } from 'redux';
import throttle from 'lodash/throttle';
import rootReducer from './reducer';
import { loadState, saveState } from '../localStorage';

const configureStore = () => {
  const persistedState = loadState('polaris');
  const middlewares = [];

  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(...middlewares)
  );

  store.subscribe(
    throttle(() => {
      saveState(
        {
          isAuth: store.getState().isAuth,
          currentUser: store.getState().currentUser,
        },
        'polaris'
      );
    }, 1000)
  );

  return store;
};

export default configureStore;
