export const getComment = (comments, currentNote) => {
  return comments.filter((comment) => comment.currentNote === currentNote );
}

export default getComment;