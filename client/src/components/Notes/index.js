import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNotes, fetchSingleNote } from '../../actions/notes'
import PropTypes from 'prop-types'
import Note from './Note'
import './style.scss';

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
  componentWillMount() {
    const { socket, dispatch } = this.props

    // Events that should trigger fetching
    dispatch(fetchNotes())

    socket.on('connect', function () {
      dispatch(fetchNotes())
    });

    socket.on('pleaseFetch', function () {
      dispatch(fetchNotes())
    });

    socket.on('pleaseFetchSingle', function (payload) {
      dispatch(fetchSingleNote(payload.id))
    });
  }

  render() {
    const {
      notes
    } = this.props

    if (notes.isFetching && notes.items.length === 0)
      return (
        <div className="notes-message">Loading notes...</div>
      )

    else if (!notes.isFetching && notes.items.length === 0)
      return (
        <div className="notes-message">Empty</div>
      )

    else if (notes.items.length > 0)
      return (
      <div className="notes">
        <div className="notes-grid">
          {[...notes.items].reverse().map(note => (
            <Note
              key={note._id}
              {...note}
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
        _id: PropTypes.string.isRequired,
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
