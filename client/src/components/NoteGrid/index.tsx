import * as React from 'react';

import Note from './Note';

import './style.scss';

class NoteGrid extends React.Component {
    render() {
        return (
            <div className="notes">
                <div className="notes-grid">
                    <Note />
                </div>
            </div>
        );
    }
}

export default NoteGrid;
