import { connect } from 'react-redux'
import { addNote } from '../../actions/note'
import NoteForm from './note-form'

const mapDispatchToProps = (dispatch) => ({
  addNote: (note) => dispatch(addNote(note))
});

export default connect(null , mapDispatchToProps)(NoteForm)