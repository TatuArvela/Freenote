import { h, Component } from 'preact';

import Header from '../header/Header'
import Notes from '../note/Notes'
import style from './app.scss';

export default class App extends Component {
    render() {
        return (
            <div class="app">
                <Header />
                <Notes />
            </div>
        );
    }
}