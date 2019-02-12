import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions'; // imports all actions in index.js in actions folder

class CommentBox extends Component {
  state = { comment: '' };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    // prevents the form from submitting itself and triggering a page refresh
    event.preventDefault();
    // call an action creator

    // save the comment
    // clear the comment box
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea
            onChange={this.handleChange}
            value={this.state.comment}
            cols="30"
            rows="10"
          />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>
          Fetch Comments
        </button>
      </div>
    );
  }
}

// makes all actions accessible on this.props.
export default connect(
  null,
  actions
)(CommentBox);
