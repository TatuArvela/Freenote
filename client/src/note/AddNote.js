import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import reduce from '../app/reducers';
import * as noteActions from '../note/noteActions';

@connect(reduce, {...noteActions})
export default class AddNote extends Component {
    addNotes = () => {
        const { title, text } = this.state;
        this.setState({ 
            title: '',
            text: '' 
        });
        this.props.addNote(title, text);
        return false;
    };

    removeNote = (note) => {
        this.props.removeNote(note);
    };

    updateTitle = (e) => {
        this.setState({ title: e.target.value });
    };

    updateText = (e) => {
        this.setState({ text: e.target.value });
    };

    render({notes}, {title, text}) {
        return (
            <form onSubmit={this.addNotes} action="javascript:" class="note note-new">
                <div class="note-content">
                    <input class="note-title" value={title} onInput={this.updateTitle} placeholder="Title"/>
                    <textarea class="note-textarea" value={text} onInput={this.updateText} placeholder="Write a new note">
                    </textarea>
                </div>
                <div class="note-controls">
                    <button class="note-button" type="submit"><i class="material-icons">add</i></button>
                </div>
            </form>
        )
    }
}