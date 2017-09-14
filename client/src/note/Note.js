import { h, Component } from 'preact';

export default class Note extends Component {
    shouldComponentUpdate({ note, onRemove }) {
        return note !== this.props.note || onRemove !== this.props.onRemove;
    }

    remove = () => {
        let { onRemove, note } = this.props;
        onRemove(note);
    };

    render({ note }) {
        return (
            <div class="note">
                <div class="note-content">
                    <input class="note-title" value={note.title}/>
                    <textarea class="note-textarea">{note.text}</textarea>
                    
                </div>
                <div class="note-controls">
                    <button onClick={this.remove} class="note-button" title="Keep on top of stack"><i class="material-icons">vertical_align_top</i></button>
                    <button onClick={this.remove} class="note-button" title="Move or copy to other stack"><i class="material-icons">layers</i></button>
                    <button onClick={this.remove} class="note-button" title="Select tags"><i class="material-icons">local_offer</i></button>
                    <button onClick={this.remove} class="note-button" title="Delete note"><i class="material-icons">delete_forever</i></button>
                </div>
            </div>
        )
    }
}