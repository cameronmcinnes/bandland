import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

let middlesWares = applyMiddleware(thunk);

if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger');
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  middlesWares = composeEnhancers(applyMiddleware(thunk, logger))
}

const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    middlesWares
  )
};

export default configureStore;
