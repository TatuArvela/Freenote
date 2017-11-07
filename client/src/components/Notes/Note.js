import React from 'react'
import PropTypes from 'prop-types'

const Note = ({ onClickDelete, onTitleChange, onTextChange, deleted, title, text }) => (
  <div className="note">
    <div className="note-content">
      <input
        className="note-title"
        value={ title }
        onChange={ onTitleChange }
      />
      <textarea
        className="note-textarea"
        style={{ textDecoration: deleted ? 'line-through' : 'none' }}
        value={ text }
        onChange={ onTextChange }
        placeholder="Write a note..."
      >
      </textarea>
    </div>
    <div className="note-controls">
      <button className="note-button" title="Keep on top of stack">
        <i className="material-icons">vertical_align_top</i>
      </button>
      <button className="note-button" title="Delete note" onClick={onClickDelete}>
        <i className="material-icons">delete_forever</i>
      </button>
    </div>
  </div>
)

Note.propTypes = {
  onClickDelete: PropTypes.func.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  deleted: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Note
