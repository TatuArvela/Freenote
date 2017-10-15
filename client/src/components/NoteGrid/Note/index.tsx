import * as React from 'react';

const Note = ( title: string, text: string ) => (
    <div className="note">
        <div className="note-content">
            <input className="note-title" value={ title }/>
            <textarea className="note-textarea">{ text }</textarea>
            
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

export default Note;
