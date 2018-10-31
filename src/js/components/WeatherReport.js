import React from "react";
import { connect } from "react-redux";
import kb from "../kb";

const mapStateToProps = state => ({
  forecast: state.forecast
});

class WeatherReport extends React.Component {

  render() {
    // TODO: include name input and answer history
    return (
      <div className="weather-report">
        <h2>Your official Weather Rock forecast</h2>
        <div className={`forecast ${this.props.forecast}`}>
          <aside>Today</aside>
          <p>{kb[this.props.forecast].label}</p>
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
      </div>
    );
  }
};

export default connect(mapStateToProps)(WeatherReport);
