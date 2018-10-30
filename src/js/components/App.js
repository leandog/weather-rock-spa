import React from "react";
import { connect } from "react-redux";
import Question from "./question";
import WeatherReport from "./weatherreport";

const mapStateToProps = state => ({
  question: state.question,
  forecast: state.forecast,
  history: state.history
});

class App extends React.Component {

  render() {
    const content = this.props.forecast !== "" ? <WeatherReport /> : <Question />;
    return (
      <div>
        <h1 className="logo">The Weather Rock <sub>Your Source For Weather</sub></h1>
        {content}
      </div>
    );
  }
};

export default connect(mapStateToProps)(App);
