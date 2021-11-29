import { combineReducers } from "redux";
import { productsReducer } from "./productsReducers";

const rootReducers = combineReducers({
  products: productsReducer,
});

export default rootReducers;
