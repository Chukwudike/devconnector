import axios from "axios";

import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  SET_CURRENT_USER
} from "./types";

export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/api/profile")
    .then(res => {
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_PROFILE,
        payload: {}
      });
    });
};
//profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};
//clear current user
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};

//create profile
export const createProfile = (profileData, history) => dispatch => {
  axios
    .post("/api/profile", profileData)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//delete profile

export const deleteProfile = () => dispatch => {
  if (window.confirm("Are you sure. This action Will NOT be reversed")) {
    axios.delete("api/profile").then(res => {
      dispatch({
        type: SET_CURRENT_USER,
        payload: {}
      })
    }).catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
  }
};

//add experience 

export const addExperience = (newExp, history) => dispatch => {
  axios
    .post("api/profile/experience", newExp)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
//add experience 

export const addEducation = (newEdu, history) => dispatch => {
  axios
    .post("api/profile/education", newEdu)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//delete experience
export const deleteExperience = (id) => dispatch => {
  axios
    .delete("api/profile/experience/id")
    .then(res=>dispatch({
      type : GET_PROFILE,
      payload : res.data
    }))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//delete education
export const deleteEducation = (id) => dispatch => {
  axios
    .delete("api/profile/education/id")
    .then(res=>dispatch({
      type : GET_PROFILE,
      payload : res.data
    }))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};