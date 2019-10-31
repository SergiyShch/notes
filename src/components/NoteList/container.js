import { connect } from 'react-redux'
import NoteList from './note-list'
import { removeNote, toggleEditing, toggleCommenting, editNote } from '../../actions/note'

const mapStateToProps = ({ notesReducer: { notes }}) => ({
  notes
});

const mapDispatchToProps = (dispatch) => ({
  removeNote: (index) => dispatch(removeNote(index)),
  toggleEditing: (id) => dispatch(toggleEditing(id)),
  editNote: (edit) => dispatch(editNote(edit)),
  toggleCommenting: (id) => dispatch(toggleCommenting(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteList)