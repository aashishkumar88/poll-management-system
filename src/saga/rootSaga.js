import * as action from "../constant";
import {signUp} from "./signUp";
import {logIn} from "./logIn";
import {all,fork,takeLatest} from "redux-saga/effects";

function* signUpBind(){
  console.log("signup in saaga")
  yield takeLatest(action.SIGN_UP_REQUEST,signUp);
}

function* logInBind(){
  yield takeLatest(action.LOG_IN_REQUEST,logIn);
}

export default function* rootSaga(){
  yield all ([fork(signUpBind),fork(logInBind)])
}