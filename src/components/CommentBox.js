import React, { Component } from 'react';

export default class CommentBox extends Component {
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
    this.setState({ comment: '' });
  };

  render() {
    return (
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
    );
  }
}
