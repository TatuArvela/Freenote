import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';

import store, { history } from './store';
import App from './views/App'
import Login from './views/Login';

import './index.scss';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
