import * as React from 'react';
// import { Route, Link } from 'react-router-dom';

import Header from '../../components/Header';
import NoteGrid from '../../components/NoteGrid';

import './style.scss';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <NoteGrid />
            </div>
        );
    }
}

export default App;
