import { TEST_DISPATCH } from "./types";
import axios from "axios";

//Register User
export const registerUser = userData => {
  return {
    type: TEST_DISPATCH,
    payload: userData
  };
};
