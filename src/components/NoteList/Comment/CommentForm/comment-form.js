import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

class CommentForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      author: '',
      content: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value})
  }

  onSubmit() {
    const { author, content } = this.state;
    const { addComment } = this.props;

    if (!author || !content) {
      return alert('fill all input fields')
    } else {
      addComment({ author, content });
    }
    
    this.setState({
      author: '',
      content: ''
    })
  }

  render() {
    const { author, content } =this.state;

    return(
      <Fragment>
        <form className="comment-form">
          <input name="author" value={author} onChange={this.onChange} placeholder="Name" required></input>
          <input name="content" value={content} onChange={this.onChange} placeholder="Comment" required></input>
          <button onClick={this.onSubmit}>ADD COMMENT</button>
        </form>
      </Fragment>
    )
  }
}

CommentForm.propTypes = {
  addComment : PropTypes.func.isRequired
}

export default CommentForm;