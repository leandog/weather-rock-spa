import React from "react";
import ReactDOM, { render } from "react-dom";

import "./index.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Weather Rock</h1>
        <p>Hello, Weather Rock!</p>
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById("root")
);
