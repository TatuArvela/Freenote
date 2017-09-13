import { h, Component } from 'preact';

import Ribbon from '../ribbon/Ribbon'
import Notes from '../note/Notes'
import Note from '../note/Note'
import style from './app.scss';

export default class App extends Component {
    render() {
        return (
            <div class="app">
                <Ribbon />
                <Notes />
            </div>
        );
    }
}