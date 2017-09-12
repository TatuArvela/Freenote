import { h, render } from 'preact';
import { Provider } from 'preact-redux';
import store from './app/store';
import App from './app/App';
import Login from './login/Login';

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