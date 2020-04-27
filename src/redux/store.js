import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);

export const store = createStore(rootReducer, enhancer);
