import { connect } from 'react-redux'
import CommentForm from './comment-form'
import { addComment } from '../../../../actions/note'

const mapDispatchToProps = (dispatch) => ({
  addComment: (comment) => dispatch(addComment(comment))
})

export default connect(null ,mapDispatchToProps)(CommentForm)