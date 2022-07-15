import * as action from "../constant";
import {signUp} from "./signUp";
import {logIn} from "./logIn";
import {all,fork,takeLatest} from "redux-saga/effects";

function* signUpBind(){
  yield takeLatest(action.LOG_IN_LOAD,signUp);
}

function* logInBind(){
  yield takeLatest(action.LOG_IN_LOAD,logIn);
}

export default function* rootSaga(){
  yield all ([fork(signUpBind),fork(logInBind)])
}