import { h, Component } from 'preact';
import Note from '../note/Note';

export default class App extends Component {
    render() {
        return (
            <div class="app">
                <h1>Hello!</h1>
                <Note />
            </div>
        );
    }
}