import { createStore, combineReducers, applyMiddleware } from "redux";
import { loginReducer } from "./login/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const reducer = combineReducers({
  login: loginReducer
});
const middleware = composeWithDevTools(applyMiddleware(thunk));
export const store = createStore(reducer, undefined, middleware);
