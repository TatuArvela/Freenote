import React from 'react'
import { connect } from 'react-redux'
import { newNote } from '../../../actions/notes'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    newNote: () => {
      dispatch(newNote())
    }
  }
}

let NewNote = ({ newNote }) => {
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

NewNote = connect(
  null,
  mapDispatchToProps
)(NewNote)

export default NewNote
