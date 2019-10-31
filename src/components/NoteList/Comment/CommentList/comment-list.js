import React, {Fragment} from 'react'
import Item from './comment-item'
import PropTypes from 'prop-types'

const getTime = () => {
  const today = new Date();
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const getMinutes = (today.getMinutes() < 10 ? '0' : '' ) + today.getMinutes();
  const getSeconds = (today.getSeconds() < 10 ? '0' : '' ) + today.getSeconds();
  const time = today.getHours() + ":" + getMinutes + ":" + getSeconds;
  const dateTime = date+' '+time;

  return dateTime;
}

const CommentList = ({ comments }) =>(
  <Fragment>
    { comments.map((comment, index) => <Item key={index} {...comment} time={getTime()} />)}
  </Fragment>
)

CommentList.defaultProps = {
  comments: []
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  )
}

export default CommentList;