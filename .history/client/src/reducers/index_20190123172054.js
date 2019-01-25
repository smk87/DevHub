import { combinedReducers } from "redux";
import authReducer from "./authReducer";

export default combinedReducers({
  auth: authReducer
});
