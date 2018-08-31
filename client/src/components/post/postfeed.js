import React, { Component } from "react";
import PropTypes from "prop-types";
import Postitem from "./postItem";

export default class Postfeed extends Component {
  render() {
    const { posts } = this.props;
    return posts.map(post => <Postitem key={post._id} post={post} />);
  }
}

Postfeed.propTypes = {
  posts: PropTypes.array.isRequired
};
