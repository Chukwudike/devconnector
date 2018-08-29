import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../common/loader";
import { getAllProfile } from "../../actions/profileAction";
import Profileitem from "./profiles";

class Profile extends Component {
  componentDidMount() {
    this.props.getAllProfile();
  }
  render() {
    const { profiles, loading } = this.props.profile;

    let profileContent;
    if (profiles === null || loading) {
      profileContent = <Spinner />;
    } else {
      if (Object.keys(profiles).length > 0) {
        profileContent = profiles.map(profile => (
          <Profileitem key={profile._id} profile={profile} />
        ));
      } else {
        profileContent = <p>There is no profile</p>;
      }
    }
    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Developer Profiles</h1>
              <p className="lead text-center">
                Browse and connect with developers
              </p>
              {profileContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  profile: state.profile
});
Profile.propType = {
  profle: PropTypes.object.isRequired
};
export default connect(
  mapStateToProps,
  { getAllProfile }
)(Profile);
