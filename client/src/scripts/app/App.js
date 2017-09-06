import { h, Component } from 'preact';
import Header from '../header/Header';
import Notes from '../notes/Notes';

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