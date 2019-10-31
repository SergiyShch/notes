import { connect } from 'react-redux'
import CommentList from './comment-list'

const mapStateToProps = ({commentsReducer: { comments }}) => ({
  comments
});

export default connect(mapStateToProps, null)(CommentList)