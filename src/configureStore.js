import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import { createBrowserHistory } from "history";

import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

import createRootReducer from "./reducers";

export const history = createBrowserHistory();

const initialState = {};

const enhancers = [];
const middleware = [logger, thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line no-underscore-dangle
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default createStore(
  createRootReducer(history), // root reducer with router state
  initialState,
  composedEnhancers
);
