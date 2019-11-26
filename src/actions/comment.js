import { ADD_COMMENT, FETCH_COMMENTS } from '../constants/note'

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  comment
});

export const fetchComments = (comments) => ({
  type: FETCH_COMMENTS,
  comments
});

