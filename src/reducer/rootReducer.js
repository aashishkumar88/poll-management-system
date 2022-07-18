import { combineReducers } from "redux";
import signUp from "./signUp";
import logIn from "./logIn";

const rootReducer = combineReducers({
  signUpState: signUp,
  logInState: logIn,
});

export default rootReducer;
