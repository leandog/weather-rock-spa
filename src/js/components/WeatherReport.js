import React from "react";
import { connect } from "react-redux";
import kb from "../kb";

const mapStateToProps = state => ({
  forecast: state.forecast,
  history: state.history
});

class WeatherReport extends React.Component {

  render() {
    const history = this.props.history;
    const name = history[0].name;
    const quantity = history[1].number;

    if (quantity > 1) {
      return (
        <div className="weather-report">
          <h2>Oops!</h2>
          <p>{kb[this.props.forecast].label}</p>
        </div>
      );
    }

    return [
      <div className="weather-report" key="weather-report">
        <h2>{name}, here's your official Weather Rock forecast!</h2>
        <div className={`forecast ${this.props.forecast}`}>
          <aside>Today</aside>
          <p>{kb[this.props.forecast].label}*</p>
        </div>
        <div className="forecast">
          <aside>Tomorrow</aside>
          <p>Who knows?</p>
        </div>
        <div className="forecast">
          <aside>In 2 Days</aside>
          <p>The Rock...</p>
        </div>
        <div className="forecast">
          <aside>In 3 Days</aside>
          <p>Knows!</p>
        </div>
      </div>,
      <div className="history" key="history">
        <p>*Based on your observations of the Weather Rock, which were:</p>
        <ul>
          {history.slice(2).map((response, i) => {
            return <li key={i}>{response.label} {response.answer}</li>
          })}
        </ul>
        <p>Experience a completely different kind of <a href="https://www.youtube.com/results?search_query=weather+report+jazz" target="_blank">Weather Report</a>.</p>
      </div>
    ];
  }
};

export default connect(mapStateToProps)(WeatherReport);
