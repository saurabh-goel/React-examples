import { createStore } from 'redux';
import rootReducer from './reducers';

/**
 * Build a Redux Store and apply middleware
 */
function configureStore() {
  const store = createStore(
    rootReducer
  );
  return store;
}

export default configureStore;
