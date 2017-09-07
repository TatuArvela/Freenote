import { h, render } from 'preact';
import { Provider } from 'preact-redux';
import store from './store';
import App from './containers/App';
import style from '../styles/index.scss';

render((
    <div id="app">
        <Provider store={store}>
            <App />
        </Provider>
    </div> 
), document.body);