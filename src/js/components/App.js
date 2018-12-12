import React from "react";
import { connect } from "react-redux";
import LanguageSwitcher from "./languageswitcher";
import Question from "./question";
import WeatherReport from "./weatherreport";
import { switchLanguage } from "../actions";

const mapStateToProps = state => ({
  question: state.question,
  forecast: state.forecast,
  history: state.history,
  lang: state.lang
});

const mapDispatchToProps = dispatch => ({
  switchLang: action => { dispatch(action) }
});

class App extends React.Component {

  constructor(props) {
    super(props);

    this.onLanguageSwitch = this.onLanguageSwitch.bind(this);
  }

  onLanguageSwitch(lang) {
    const action = switchLanguage(lang);
    this.props.switchLang(action);
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
