import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// Reducers
import todos from "./todo";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    todos,
  });

export default createRootReducer;
