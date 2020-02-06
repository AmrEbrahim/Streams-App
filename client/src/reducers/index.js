import { combineReducers } from "redux";
import { reducer } from "redux-form";
import AuthReducer from "./AuthReducer";
import StreamReducer from "./StreamReducers";

export default combineReducers({
  auth: AuthReducer,
  form: reducer,
  streams: StreamReducer
});
