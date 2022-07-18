import * as actions from "../constant";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: null,
};

const signUp = (state = initialState, action) => {
  console.log("reducers signup",action);

  switch (action.type) {
    case actions.SIGN_UP_REQUEST:
      return {
        isLoading: true,
        isSuccess: false,
        isError: false,
      };

    case actions.SIGN_UP_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        isError: false,
        data: action.payload.response,
      };
    case actions.SIGN_UP_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        isError: true,
      };
    default:
      return state;
  }
};
export default signUp;
