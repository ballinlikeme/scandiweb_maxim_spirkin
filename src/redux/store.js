import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import { categoryReducer } from "./reducers/category";
import { currencyReducer } from "./reducers/currency";
import { cartReducer } from "./reducers/cart";
import { overlayReducer } from "./reducers/overlay";

export const rootReducer = combineReducers({
  category: categoryReducer,
  currency: currencyReducer,
  cart: cartReducer,
  overlay: overlayReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware())
);
