// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];


if (process.env.NODE_ENV === 'development') {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  if (typeof composeEnhancer === 'function') {
    enhancers.push(composeEnhancer());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);
const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers,
)

export default store;
