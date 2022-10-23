import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";

import postReducer from "./reducers/postsReducer";

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const reducer = combineReducers({
  postReducer,
});
const store = configureStore(reducer, applyMiddleware(...middleware));

export default store;
