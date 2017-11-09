import React from 'react'
import { connect } from 'react-redux'
import { addNote } from '../../../actions/notes'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addNote: () => {
      dispatch(addNote(null))
    }
  }
}

let AddNote = ({ addNote }) => {
  return (
    <button
      className="header-toolbar-button big"
      onClick={addNote}
    >
      <i className="material-icons green">note_add</i>
      <span className="button-title">New Note</span>
    </button>
  )
}

AddNote = connect(
  null,
  mapDispatchToProps
)(AddNote)

export default AddNote
