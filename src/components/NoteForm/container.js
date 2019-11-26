import { connect } from 'react-redux'
import { addNote } from '../../actions/note'
import { addFireNote } from '../../config/firebase'
import NoteForm from './note-form'

const mapStateToProps = ({optionReducer: { option }}) => ({
  option
});

const mapDispatchToProps = (dispatch) => ({
  addNote: (note) => dispatch(addNote(note)),
  addFireNote: (note) => dispatch(addFireNote(note))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)