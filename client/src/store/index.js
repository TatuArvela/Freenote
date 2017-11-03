import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import reducers from '../reducers';

export const history = createHistory();

const initialState = {};
const middleware = [
  thunk,
  routerMiddleware(history)
];

const composedEnhancers = (process.env.NODE_ENV === 'development')
  ? composeWithDevTools(
    applyMiddleware(...middleware)
  )
  : compose(
    applyMiddleware(...middleware)
  );

const store = createStore(
  reducers,
  initialState,
  composedEnhancers
);

export default store;
