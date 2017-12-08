import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { 
  softDelete,
  changeTitle,
  changeText
} from '../../actions/notes'

const mapDispatchToProps = (dispatch) => {
  return {
    onClickDelete: (_id) => {
      dispatch(softDelete(_id))
    },
    onTitleChange: (_id, value) => {
      dispatch(changeTitle(_id, value))
    },
    onTextChange: (_id, value) => {
      dispatch(changeText(_id, value))
    }
  }
}

const Note = ({ onClickDelete, onTitleChange, onTextChange, deleted, title, text, _id }) => {
  return (
    <div className={"note " + (deleted ? 'deleted' : '')}>
      <div className="note-content">
        <input
          className="note-title"
          value={title}
          onChange={ (e) => onTitleChange(_id, e.target.value) }
        />
        <textarea
          className="note-textarea"
          value={text}
          onChange={ (e) => onTextChange(_id, e.target.value) }
          placeholder="Write a note..."
        >
        </textarea>
      </div>
      <div className="note-controls">
        {/* <button className="note-button" title="Keep on top of stack">
          <i className="material-icons">vertical_align_top</i>
        </button> */}
        <button className="note-button" title={deleted ? 'Restore note' : 'Delete note'} onClick={ () => onClickDelete(_id) }>
          <i className="material-icons">{deleted ? 'arrow_upward' : 'delete'}</i>
        </button>
      </div>
    </div>
  )
}

Note.propTypes = {
  onClickDelete: PropTypes.func.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  deleted: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default connect(
  null,
  mapDispatchToProps
)(Note)
