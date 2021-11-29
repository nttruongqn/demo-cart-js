import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import store from './store/store';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reduxStore from "./redux";



ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);


