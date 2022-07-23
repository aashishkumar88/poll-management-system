import { combineReducers } from "redux";
import signUp from "./signUp";
import logIn from "./logIn";
import viewPoll from "./viewPoll";

const rootReducer = combineReducers({
  signUpState: signUp,
  logInState: logIn,
  viewPollState:viewPoll
});

export default rootReducer;
