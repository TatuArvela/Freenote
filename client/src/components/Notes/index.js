import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  fetchNotesIfNeeded,
  toggleDelete,
  changeTitle,
  changeText
} from '../../actions/notes'
import PropTypes from 'prop-types'
import Note from './Note'
import './style.scss';

const getVisibleNotes = (state) => {
  const notes = state.notes.items
  switch (state.filter) {
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

const mapStateToProps = (state) => {
  const notes = {
    isFetching: state.notes.isFetching,
    items: getVisibleNotes(state),
    lastUpdated: state.notes.lastUpdated
  }
  return {
    notes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickDelete: id => {
      dispatch(toggleDelete(id))
    },
    onTitleChange: (id, value) => {
      dispatch(changeTitle(id, value))
    },
    onTextChange: (id, value) => {
      dispatch(changeText(id, value))
    },
    dispatch: dispatch
  }
}

class Notes extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchNotesIfNeeded())
  }

  componentDidUpdate(prevProps) {
    const { dispatch } = this.props
    dispatch(fetchNotesIfNeeded())
  }

  render() {
    const {
      notes,
      onClickDelete,
      onTitleChange,
      onTextChange
    } = this.props

    if (notes.isFetching && notes.items.length === 0)
      return (
        <h2>Loading...</h2>
      )

    else if (!notes.isFetching && notes.items.length === 0)
      return (
        <h2>Empty.</h2>
      )

    else if (notes.items.length > 0)
      return (
      <div className="notes">
        <div className="notes-grid">
          {[...notes.items].reverse().map(note => (
            <Note
              key={note.id}
              {...note}
              onClickDelete={() => onClickDelete(note.id)}
              onTitleChange={(e) => onTitleChange(note.id, e.target.value)}
              onTextChange={(e) => onTextChange(note.id, e.target.value)}
            />
          ))}
        </div>
      </div>
      )
  }
}

Notes.propTypes = {
  notes: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        deleted: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
  }).isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notes)
