import { put, call } from "@redux-saga/core/effects";
import axios from "axios";
import { viewPollSuccess, viewPollError } from "../action/index";

export function* viewPoll() {
  console.log("viewPoll api1");
  let response = yield call(
    axios.get,
    'https://secure-refuge-14993.herokuapp.com/list_polls'
  );

  try {
    if (response && response.data) {
      yield put(viewPollSuccess({ response: response.data }));
    } else {
      yield put(viewPollError({ error: "NO DATA" }));
    }
  } catch (error) {
    yield put(viewPollError({ error: "NO DATA" }));
  }
}

export default viewPoll;
