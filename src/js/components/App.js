import React from "react";
import { connect } from "react-redux";
import LanguageSwitcher from "./languageswitcher";
import Question from "./question";
import WeatherReport from "./weatherreport";

const mapStateToProps = state => ({
  question: state.question,
  forecast: state.forecast,
  history: state.history
});

class App extends React.Component {

  constructor(props) {
    super(props);

    this.onLanguageSwitch = this.onLanguageSwitch.bind(this);
  }

  onLanguageSwitch(lang) {
    console.log("onLanguageSwitch:", lang);
  }

  render() {
    const content = this.props.forecast !== "" ? <WeatherReport /> : <Question />;
    return (
      <div>
        <h1 className="logo">The Weather Rock <sub>Your Source For Weather</sub></h1>
        {content}
        <footer>
          <LanguageSwitcher onSwitch={this.onLanguageSwitch} />
        </footer>
      </div>
    );
  }
};

export default connect(mapStateToProps)(App);
