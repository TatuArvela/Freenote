import { h, render } from 'preact';
import { Provider } from 'preact-redux';
import store from './app/store';
import App from './app/App';
import Login from './login/Login';

var loggedIn = true;

render((
    <Provider store={store}>
        <div id="preact">
            {!loggedIn && <Login />}
            {loggedIn && <App />}
        </div>
    </Provider>
), document.body);