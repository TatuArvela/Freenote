import { connect } from 'react-redux'

import { toggleDelete, changeTitle, changeText } from '../../actions/notes'
import NoteList from './NoteList'

const getVisibleNotes = (notes, filter) => {
  switch (filter) {
    case 'SHOW_ACTIVE':
      return notes.filter(n => !n.deleted)
    case 'SHOW_DELETED':
      return notes.filter(n => n.deleted)
    case 'SHOW_ALL':
      return notes
    default:
      return notes.filter(n => !n.deleted)
  }
}

const mapStateToProps = state => {
  return {
    notes: getVisibleNotes(state.notes, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickDelete: id => {
      dispatch(toggleDelete(id))
    },
    onTitleChange: (id, value) => {
      dispatch(changeTitle(id, value))
    },
    onTextChange: (id, value) => {
      dispatch(changeText(id, value))
    }
  }
}

const Notes = connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList)

export default Notes
