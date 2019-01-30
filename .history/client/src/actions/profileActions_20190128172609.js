import axios from "axios";

import {
  GET_PROFILE,
  PROFILE_LOADING,
  GET_ERRORS,
  CLEAR_CURRENT_PROFILE
} from "./types";

//GET current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());

  axios
    .get("/api/profile")
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
};

//Profile loading
export const clearCurrentProfile = () => {
  return {
    type: PROFILE_LOADING
  };
};

//clear profile
export const setProfileLoading = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};