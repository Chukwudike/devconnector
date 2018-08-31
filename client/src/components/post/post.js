import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import Spinner from '../common/loader';
import Postform from './postForm';
import {getPosts} from '../../actions/postActions';
import Postfeed from './postfeed'

 class Post extends Component {
  
  componentDidMount(){
    this.props.getPosts()
  }

  render() {

      const {posts,loading} = this.props.post;

      let postContent

      if(posts === null || loading) {
        postContent = <Spinner/>
      } else{
        postContent = <Postfeed posts = {posts}/>
      }

    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Postform />
              {postContent}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth : state.auth,
  errors: state.errors,
  post: state.post
});

Post.propType = {
  profile: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};


export default connect(mapStateToProps,{getPosts})(Post);