import { ADD_COMMENT } from '../constants/note'

export const addComment = (comment) => ({
    type: ADD_COMMENT,
    comment
});