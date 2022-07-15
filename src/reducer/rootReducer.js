import {combineReducer} from "redux";
import {signUp} from "./signUp"
import {logIn} from "./logIn"

const rootReducer=combineReducer({
  signUpState:signUp,
  logInState:logIn,
});

export default rootReducer;