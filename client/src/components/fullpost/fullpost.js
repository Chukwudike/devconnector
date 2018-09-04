import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPost } from "../../actions/postActions";
import Spinner from "../common/loader";
import PostItem from "../post/postItem";
import Commentfeed from "../comment/commentfeed";
import Commentform from "../comment/comment";

class Fullpost extends Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.getPost(this.props.match.params.id);
    }
  }

  render() {
    const { post, loading } = this.props.post;
    let postContent;

    if (post === null || loading || Object.keys(post).length === 0) {
      postContent = <Spinner />;
    } else {
      postContent = (
        <div>
           <PostItem post={post} showAction={false} />
          <Commentform postId={post._id} />
          <Commentfeed postId = {post._id} comments={post.comments} />
        </div>
      );
      
    }
    return (
      <div className="post">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link to="/feed" className="btn btn-light mb-3">
                Back To Feed
              </Link>
            {postContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Fullpost.propTypes = {
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPost }
)(Fullpost);
