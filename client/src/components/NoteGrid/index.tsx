import * as React from 'react';

import Note from './Note';

import './style.scss';

class NoteGrid extends React.Component {

    private getNotes() {
        return this.props.notes.map((note, index) => {
            return <Note>
                <TableRowColumn>{note.id}</TableRowColumn>
                <TableRowColumn>{note.note}</TableRowColumn>
            </Note>;
        });
    }

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
