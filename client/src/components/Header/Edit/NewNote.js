import React from 'react'
import { newNote } from '../../../actions/notes'

let NewNote = () => {
  return (
    <button
      className="header-toolbar-button big"
      onClick={newNote}
    >
      <i className="material-icons">note_add</i>
      <span className="button-title">New Note</span>
    </button>
  )
}

export default NewNote
