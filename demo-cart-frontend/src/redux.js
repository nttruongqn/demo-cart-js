import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducers  from "./store/reducers/rootReducers";


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reduxStore = createStore(
    rootReducers,
    composeEnhancer(applyMiddleware(thunk))
);

export default reduxStore;


