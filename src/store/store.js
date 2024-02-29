import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import siteReducer from "./reducers/siteReducer";
import adminReducer from "./reducers/adminReducer";

let middleware = [thunk];

const rootReducer = combineReducers({
  site: siteReducer,
  admin: adminReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
