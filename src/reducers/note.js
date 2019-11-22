import { ADD_LOCAL_NOTE, REMOVE_NOTE, TOGGLE_EDITING, EDIT_NOTE, TOGGLE_COMMENTING} from '../constants/note'

const defaultState = {
  notes: [],
  currentNote: ''
}

const notesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_LOCAL_NOTE:
      const newState = { ...state }
      const noteId = newState.notes.length; 
      return {
        ...newState,
        notes: [
          ...newState.notes, 
          { name: action.note.name, content: action.note.content, id: noteId}
        ]
      };
    case REMOVE_NOTE:
      state.notes.splice(action.index, 1);
      return {
        ...state,
        notes: [...state.notes]
      };
    case TOGGLE_EDITING:
      const editingNotes = state.notes.map((note) => {
        if (note.id === action.id) {
          note.isEditing = !note.isEditing
          return note
        }
        return note
      })
      return {...state, currentNote: action.id, notes: editingNotes}  
    case TOGGLE_COMMENTING:
      const commentingNotes = state.notes.map((note) => {
        if (note.id === action.id) {
          note.isCommenting = !note.isCommenting;
          return note
        }
        return note
      })
      return  { ...state, currentNote: action.id, notes: commentingNotes}
    case EDIT_NOTE:
      const editedNotes = state.notes.map((note) => {
        if (note.isEditing && (note.id === state.currentNote)) {
          note.name = action.edit.editName;
          note.content = action.edit.editContent;
          note.isEditing = !note.isEditing;
          return note
        }
        return note
      })
      return { ...state, notes: editedNotes }
    default:
      return state
  }
};

export default notesReducer;