import { GET_ERRORS } from "./types";
import axios from "axios";

//Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data.errors
      })
    );
};

//Login User- Get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      //Save to localStorage
      const { token } = res.data;
      //Set token to ls
      localStorage.setItem("jwtToken", token);
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data.errors
      })
    );
};
