import React from 'react'
import { connect } from 'react-redux'
import { newNote } from '../../../actions/notes'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(newNote())
    }
  }
}

let NewNote = ({ dispatch, onClick }) => {
  return (
    <button
      className="header-toolbar-button big"
      onClick={() => onClick()}
    >
      <i className="material-icons">note_add</i>
      <span className="button-title">New Note</span>
    </button>
  )
}

export default connect(
  null,
  mapDispatchToProps
)(NewNote)
