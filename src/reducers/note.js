import { ADD_NOTE, REMOVE_NOTE, TOGGLE_EDITING, EDIT_NOTE, TOGGLE_COMMENTING} from '../constants/note'

const defaultState = {
  notes: [],
  id: 2
}

const notesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      const newState = { ...state }
      newState.id++;
      return {
        ...newState,
        notes: [
          ...newState.notes, 
          { name: action.note.name, content: action.note.content, id: newState.id}
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
      return {...state, notes: editingNotes}  
    case TOGGLE_COMMENTING:
      const commentingNotes = state.notes.map((note) => {
        if (note.id === action.id) {
          note.isCommenting = !note.isCommenting
          return note
        }
        return note
      })
      return  { ...state, notes: commentingNotes}
    case EDIT_NOTE:
      const editedNotes = state.notes.map((note) => {
        if (note.isEditing) {
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