import React, {Fragment} from 'react'
import Item from './comment-item'
import PropTypes from 'prop-types'

class CommentList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      author: '',
      content: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  getTime = () => {
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const getMinutes = (today.getMinutes() < 10 ? '0' : '' ) + today.getMinutes();
    const getSeconds = (today.getSeconds() < 10 ? '0' : '' ) + today.getSeconds();
    const time = today.getHours() + ":" + getMinutes + ":" + getSeconds;
    const dateTime = date+' '+time;
  
    return dateTime;
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value})
  }

  onSubmit() {
    const { author, content } = this.state;
    const { addComment, addFireComment, currentNote } = this.props;
    const createdAt = this.getTime();
    
    if (!author || !content) {
      return alert('Fill all input fields');
    }
    
    const strArray = author.split(" ");
    const first = strArray[0][0];
    const last = strArray[1][0];

    const isChecked = first.toUpperCase() === first && last.toUpperCase() === last;
    
    if (!isChecked) {
      return alert('Name: Firstname Lastname');
    } else if (this.props.option === 'firebase') {
        addFireComment({ author, content, currentNote, createdAt });
        this.props.fetchCommentsThunk();
    } else {
        addComment({author, content, currentNote, createdAt});
    }
    
    this.setState({
      author: '',
      content: ''
    })
  }

  UNSAFE_componentWillMount() {
    if (this.props.option === 'firebase') {
      this.props.fetchCommentsThunk();
    }
  }

  render() {
    const { author, content } =this.state;

    return (
      <Fragment>
        <form className="comment-form">
          <input name="author" value={author} onChange={this.onChange} placeholder="Name" required></input>
          <input name="content" value={content} onChange={this.onChange} placeholder="Comment" required></input>
          <button onClick={this.onSubmit}>ADD COMMENT</button>
        </form>
        { this.props.comments.map((comment, index) => <Item key={index} {...comment} />)}
      </Fragment>
    )
  }
}

CommentList.defaultProps = {
  comments: []
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  ),
  currentNote: PropTypes.number.isRequired,
  addComment: PropTypes.func.isRequired
}

export default CommentList;