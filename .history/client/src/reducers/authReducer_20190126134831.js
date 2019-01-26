import { SET_CURRENT_USER } from "../action/types";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
