import { h, render } from 'preact';
// import { Provider } from 'preact-redux';
// import store from './store';
import App from './app/App';
import style from '../styles/index.scss';

render((
    // <div id="outer">
    //     <Provider store={store}>
            <App />
    //     </Provider>
    // </div> 
), document.body);