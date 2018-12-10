import "core-js";

import React from "react";
import ReactDOM, { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./js/components/app";
import rootReducer from "./js/reducers";

import "./index.scss";

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
