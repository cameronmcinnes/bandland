import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
  // if (process.env.NODE_ENV === 'production') {
  //   return createStore(
  //     rootReducer,
  //     preloadedState,
  //     applyMiddleware(thunk, logger)
  //   )
  // } else {
  //   const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  //   return createStore(
  //     rootReducer,
  //     preloadedState,
  //     composeEnhancers(applyMiddleware(thunk, logger))
  //   )
  // }
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
};

export default configureStore;
