import { LOGIN_SUCCESS, SET_LOGIN_LOADING, SET_LOGIN_ERROR } from "./actions";

function getInitialState() {
  return {
    isLoginedIn: false,
    isLoading: false,
    error: null
  };
}

export function loginReducer(state = getInitialState(), action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoginedIn: true
      };
    case SET_LOGIN_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case SET_LOGIN_ERROR:
      return {
        ...state,
        error: action.error
      };
  }
  return state;
}
