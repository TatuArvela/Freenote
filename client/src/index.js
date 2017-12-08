import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route } from 'react-router-dom';
import store, { history } from './store';
import App from './views/App'
import Login from './views/Login';
import './index.scss';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  target
)
