import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  fetchNotes,
  softDelete,
  changeTitle,
  changeText
} from '../../actions/notes'
import PropTypes from 'prop-types'
import Note from './Note'
import './style.scss';

// TODO: Clean up this mess

const getVisibleNotes = (state) => {
  const notes = state.notes.items
  switch (state.visibilityFilter) {
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
    dispatch: dispatch
  }
}

class Notes extends Component {
  componentDidMount() {
    const { socket, dispatch } = this.props

    socket.on('connect', function () {
      socket.emit('connection')
      dispatch(fetchNotes())

      socket.on('pleaseFetch', function () {
        dispatch(fetchNotes())
      });
    });
  }

  render() {
    const {
      notes,
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
              onClickDelete={() => softDelete(note.id)}
              onTitleChange={(e) => changeTitle(note.id, e.target.value)}
              onTextChange={(e) => changeText(note.id, e.target.value)}
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
  dispatch: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notes)
