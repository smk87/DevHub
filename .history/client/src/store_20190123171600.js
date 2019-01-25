import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(() => [], {}, applyMiddleware());

export default store;
