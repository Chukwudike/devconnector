import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentItem from './commentItem';

class CommentFeed extends Component {
  render() {
    const { comments, postId } = this.props
    return comments.map(comment => 
      <CommentItem key={comment._id} Comment={comment} postId={postId} />
    );
  }
}

CommentFeed.propTypes = {
  comments: PropTypes.array.isRequired,
  postId: PropTypes.string.isRequired
};

export default CommentFeed;