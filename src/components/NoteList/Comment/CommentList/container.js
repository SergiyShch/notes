import { connect } from 'react-redux'
import CommentList from './comment-list'
import { addComment } from '../../../../actions/comment'
import { getComment } from '../../../../selectors/comment'
import { addFireComment, fetchCommentsThunk } from '../../../../config/firebase'

const mapStateToProps = ({commentsReducer: { comments }, notesReducer: { currentNote }, optionReducer: { option}}) => ({
  comments: getComment(comments, currentNote),
  currentNote,
  option
});

const mapDispatchToProps = (dispatch) => ({
  addComment: (comment) => dispatch(addComment(comment)),
  addFireComment: (comment) => dispatch(addFireComment(comment)),
  fetchCommentsThunk: () => dispatch(fetchCommentsThunk())
});

export default connect(mapStateToProps,mapDispatchToProps)(CommentList)