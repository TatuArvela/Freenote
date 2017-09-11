import { h, render } from 'preact';
import { Provider } from 'preact-redux';
import store from './store';
import App from './containers/App';
import Login from './containers/Login';

var loggedIn = false;

render((
    <div id="preact">
        {!loggedIn && 
            <Provider store={store}>
                <Login />
            </Provider>
        }
        {loggedIn && 
            <Provider store={store}>
                <App />
            </Provider>
        }
    </div> 
), document.body);