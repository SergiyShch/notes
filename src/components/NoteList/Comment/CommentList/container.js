import { connect } from 'react-redux'
import CommentList from './comment-list'
import { addComment } from '../../../../actions/comment'
import { getComment } from '../../../../selectors/comment'

const mapStateToProps = ({commentsReducer: { comments }, notesReducer: { currentNote }}) => ({
  comments: getComment(comments, currentNote),
  currentNote
});

const mapDispatchToProps = (dispatch) => ({
  addComment: (comment) => dispatch(addComment(comment))
});

export default connect(mapStateToProps,mapDispatchToProps)(CommentList)