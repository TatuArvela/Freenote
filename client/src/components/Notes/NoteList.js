import React from 'react'
import PropTypes from 'prop-types'

import Note from './Note'

import './style.scss';

const NoteList = ({ notes, onClickDelete, onTextChange }) => (
  <div className="notes">
    <div className="notes-grid">
      {notes.map(note => (
        <Note
          key={note.id}
          {...note}
          onClickDelete={() => onClickDelete(note.id)}
          onTextChange={(e) => onTextChange(note.id, e.target.value)}
        />
      ))}
    </div>
  </div>
)

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      deleted: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired
}

export default NoteList
