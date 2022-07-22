import * as actions from "../constant";


const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: null,
  message:null,
};

const signUp = (state = initialState, action) => {
  // console.log("reducers signup",action);
console.log(action.payload.response.message, "reducer error@@@@");

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
        message: action.payload.message,
      };
    default:
      return state;
  }
};
export default signUp;
