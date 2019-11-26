import { ADD_COMMENT, FETCH_COMMENTS } from '../constants/note'

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
    case FETCH_COMMENTS:
      return {
        comments: action.comments
      };
    default:
      return state
  }
};

export default commentsReducer;