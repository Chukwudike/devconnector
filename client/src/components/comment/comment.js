import PropTypes from "prop-types";
import { connect } from "react-redux";
import Textarea from "../common/textArea";
import React, { Component } from "react";
import { addComment } from "../../actions/postActions";
//mport CommentFeed from "./commentfeed";
class Commentform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    const newComment = {
      text: this.state.text,
      name: this.props.auth.user.name,
      avatar: this.props.auth.user.avatar
    };
    console.log(newComment);
    this.props.addComment(this.props.postId,newComment);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentWillReceiveProps(newprops) {
    if (newprops.errors) {
      this.setState({ errors: newprops.errors });
    }
  }
  render() {
    const { errors } = this.state;

    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">Add a comment...</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <Textarea
                  placeholder="Share your thoughts"
                  name="text"
                  value={this.state.text}
                  onChange={this.onChange}
                  error={errors.text}
                />
              </div>
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

Commentform.propType = {
  postId: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { addComment }
)(Commentform);
