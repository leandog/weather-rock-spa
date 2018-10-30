import React from "react";
import { connect } from "react-redux";
import kb from "../kb";

const mapStateToProps = state => ({
  forecast: state.forecast
});

class WeatherReport extends React.Component {

  render() {
    // TODO: include name input and answer history
    return [
      <p key="f1">The Weather Rock's forecast for right now:</p>,
      <p key="f2">{kb[this.props.forecast].label}</p>
    ];
  }
};

export default connect(mapStateToProps)(WeatherReport);
