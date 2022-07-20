import * as action from "../constant";
import {signUp} from "./signUp";
import {logIn} from "./logIn";
import {all,fork,takeLatest} from "redux-saga/effects";
import {viewPoll} from "./viewPoll"

function* signUpBind(){
  console.log("signup in saaga")
  yield takeLatest(action.SIGN_UP_REQUEST,signUp);
}

function* logInBind(){
  yield takeLatest(action.LOG_IN_REQUEST,logIn);
}

function* viewPollBind() {
  yield takeLatest(action.VIEW_POLL_REQUEST,viewPoll );
}

export default function* rootSaga(){
  yield all ([fork(signUpBind),fork(logInBind),fork(viewPollBind)])
}