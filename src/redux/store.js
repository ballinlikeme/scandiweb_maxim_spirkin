import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import { categoryReducer } from "./reducers/categoryReducer";
import { currencyReducer } from "./reducers/currencyReducer";
import { cartItemsReducer } from "./reducers/cartItemsReducer";
import { overlayReducer } from "./reducers/overlayReducer";

export const rootReducer = combineReducers({
  category: categoryReducer,
  currency: currencyReducer,
  cart: cartItemsReducer,
  overlay: overlayReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware())
);
