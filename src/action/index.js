import {createAction} from "redux-actions";
import * as constant from "../constant";

export const signUpRequest = createAction(constant.SIGN_UP_REQUEST);
export const signUpSuccess = createAction(constant.SIGN_UP_SUCCESS);
export const signUpError = createAction(constant.SIGN_UP_ERROR);

export const logInRequest = createAction(constant.SIGN_UP_REQUEST);
export const logInSuccess = createAction(constant.SIGN_UP_SUCCESS);
export const logInError = createAction(constant.SIGN_UP_ERROR);