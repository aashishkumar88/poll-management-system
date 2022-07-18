import {put,call} from "@redux-saga/core/effects";
import axios from "axios";
import { logInSuccess,logInError } from "../action/index";

export function* logIn(action){
  console.log("login successfully")
  const {username,password}=action.payload;
  let response=yield call(
    axios.get,
`https://secure-refuge-14993.herokuapp.com/login?username=${username}&password=${password}`);

try {
    if (response && response.data) {
      yield put(logInSuccess({ response: response.data }));
       
    }
    else {
      yield put(logInError({ error: "NO DATA" }));
    }
  } 
  catch (error) {
    yield put(logInError({ error: "NO DATA" }));
  }
}
export default logIn;