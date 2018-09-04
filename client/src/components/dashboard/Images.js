import React, { Component } from "react";
import PropTypes from "prop-types";
import FormData from "form-data";
import classnames from "classnames";
import { connect } from "react-redux";
import {updateImage} from "../../actions/profileAction"


 class Images extends Component {
  constructor(props) {
    super();
    this.state = {
      avatar: null,
      errors: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.files[0] });
  }

  onSubmit() {
    //e.preventDefault()
    const formData = new FormData();
    if (this.state.avatar) {
      //console.log(this.state.avatar);
      formData.append("avatar", this.state.avatar, this.state.avatar.name);
    }
    this.props.updateImage(formData);
  }

  componentWillReceiveProps(newprops){
      if(newprops.errors){
          this.setState ({errors : newprops.errors.image});
      }
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="form-group">
        <label htmlFor="avatar">Upload profile picture</label>
        <input
          type="file"
          onChange={this.onChange}
          className={classnames("form-control form-control-lg", {
            "is-invalid": errors
          })}
          name="avatar"
        />
        <small className="form-text text-muted">upload an image with either - png,jpeg,jpg.Png is better</small>
        <button className="btn block btn-info mt-3" onClick={this.onSubmit}>
          Upload!
        </button>
        
        {errors && <div className="invalid-feedback">{errors} </div>}
      </div>
    );
  }
}

Images.propTypes = {
errors : PropTypes.object.isRequired,
profile : PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  errors : state.errors,
  profile : state.profile
})

export default connect (mapStateToProps,{updateImage})(Images)