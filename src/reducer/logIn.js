import * as actions from "../constant";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: null,
};

const logIn = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOG_IN_REQUEST:
      return {
        isLoading: true,
        isSuccess: false,
        isError: false,
      };

    case actions.LOG_IN_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        isError: false,
        data: actions.payload.response,
      }
      case actions.LOG_IN_ERROR:
        return {
          isLoading: false,
          isSuccess: false,
          isError: true,
        };
      default:
        return state;
  }
};
 export default logIn;