import { put, call } from "@redux-saga/core/effects";
import axios from "axios";
import { signUpSuccess, signUpError } from "../action/index";

export function* signUp(action) {

 console.log("signup api1");
  const { username, password, role } = action.payload;

  let response = yield call(
    axios.get,
    `https://secure-refuge-14993.herokuapp.com/add_user?username=${username}&password=${password}&role=${role}`
  );
 console.log(response,"dfghjjjkjhgfd")

  try {
    if (response && response.data) {
      yield put(signUpSuccess({ response: response.data }));
      localStorage.setItem("role",response.data.data.role)
     
      console.log(response.data.data.role,"NnIIiKkk")
    } else {
      yield put(signUpError({ error: "NO DATA" }));
    }
  } catch (error) {
    yield put(signUpError({ error: "NO DATA" }));
  }
}

export default signUp;
