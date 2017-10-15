import * as React from 'react';

class Note extends React.Component {
    render() {
        return (
            <div className="note">
                <div className="note-content">
                    <input className="note-title" value="Title"/>
                    <textarea className="note-textarea">Text</textarea>
                    
                </div>
                <div className="note-controls">
                    <button className="note-button" title="Keep on top of stack">
                        <i className="material-icons">vertical_align_top</i>
                    </button>
                    <button className="note-button" title="Delete note">
                        <i className="material-icons">delete_forever</i>
                    </button>
                </div>
            </div>
        );
    }
}

export default Note;
