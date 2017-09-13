import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import reduce from '../app/reducers';
import * as noteActions from '../note/noteActions';
import AddNote from './AddNote';
import Note from './Note';

@connect(reduce, {...noteActions})
export default class Notes extends Component {
    removeNote = (note) => {
        this.props.removeNote(note);
    };

    render({notes}, {title, text}) {
        return (
            <div class="notes">
                <div class="notes-grid">
                    <AddNote />
                    {[...notes].reverse().map(note => (
                        <Note key={note.id} note={note} onRemove={this.removeNote} />
                    ))}
                </div>
            </div>
        )
    }
}