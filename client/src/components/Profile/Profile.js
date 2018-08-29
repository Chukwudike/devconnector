import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Profileheader from "./profileHeader";
import Profileabout from "./profileAbout";
import Profilecredds from "./profileCredds";
import ProfileGithub from "./profileGithub";
import Spinner from '../common/loader'
import { getProfileByHandle } from "../../actions/profileAction";

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }
  componentWillReceiveProps(nextProps){
      if(nextProps.profile.profile===null && this.props.profile.loading){
          this.props.history.push('/not-found')
      }
  }

  render() {
    const { profile, loading } = this.props.profile;
    let profileContent;

    if (profile === null || loading) {
      profileContent = <Spinner/>;
    } else {
      profileContent = (
        <div>
          <div className="row">
            <div className="col-md-6">
              <Link to="/profiles" className="btn btn-light mb-3 float-left">
                Back To Profiles
              </Link>
            </div>
            <div className="col-md-6" />
          </div>
          <Profileheader profile={profile} />
          <Profileabout profile={profile} />
          <Profilecredds education = {profile.education} experience={profile.experience} />
          {profile.githubusername ? (<ProfileGithub username={profile.githubusername } />): null}
          
        
        </div>
      );
    }
    return <div>{profileContent}</div>;
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

Profile.proptype = {
  profile: PropTypes.object.isRequired,
  getProfileByHandle: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { getProfileByHandle }
)(Profile);
