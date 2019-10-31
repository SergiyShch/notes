import { ADD_COMMENT } from '../constants/note'

const defaultState = {
  comments: []
}

const commentsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments,
          action.comment
        ]
      };
    default:
      return state
  }
};

export default commentsReducer;