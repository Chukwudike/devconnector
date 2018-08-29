import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileAction";
import Spinner from "../common/loader";
import ProfileActions from "./profileActions";
import {deleteProfile} from "../../actions/profileAction";
import Experience from './Experience';
import Education from './Education';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  Delete(){
    this.props.deleteProfile();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      //check if logged in user has profile
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <p className="lead text-muted">
              {" "}
              Hello{" "}
              <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
            </p>
            <ProfileActions />
            <Experience experience = {profile.experience}/>
            <Education education = {profile.education} />

            <div style={{ marginBottom: "60px" }}>
              <button
                className="btn btn-danger"
                onClick={this.Delete.bind(this)}
              >
                Delete Profile
              </button>
            </div>
          </div>
        );
      } else {
        dashboardContent = (
          <div>
            <p className="lead text-muted"> Hello {user.name} </p>
            <p>You have not set up a profile, Please add some info</p>
            <Link to="/create-profile" className="btn btn-lg btn-info">
              Create profile!
            </Link>
          </div>
        );
      }
    }

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteProfile }
)(Dashboard);
