import { connect } from 'react-redux'
import NoteList from './note-list'
import { 
  removeNote, 
  toggleEditing,
  toggleCommenting, 
  editNote
} from '../../actions/note'
import { 
  removeFireNote, 
  fetchNotesThunk, 
  editFireNote 
} from '../../config/firebase'

const mapStateToProps = ({ notesReducer: { notes, currentNote }, optionReducer: { option }}) => ({
  notes,
  currentNote,
  option
});

const mapDispatchToProps = (dispatch) => ({
  removeNote: (index) => dispatch(removeNote(index)),
  removeFireNote: (id) => dispatch(removeFireNote(id)),
  toggleEditing: (id) => dispatch(toggleEditing(id)),
  editNote: (edit) => dispatch(editNote(edit)),
  editFireNote: (editNote, id) => dispatch(editFireNote(editNote, id)),
  toggleCommenting: (id) => dispatch(toggleCommenting(id)),
  fetchNotesThunk: () => dispatch(fetchNotesThunk())
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteList)