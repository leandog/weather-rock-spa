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
      <div className={`forecast ${this.props.forecast}`}>
        <aside>Your official Weather Rock forecast</aside>
        <p>{kb[this.props.forecast].label}</p>
      </div>
    );
  }
};

export default connect(mapStateToProps)(WeatherReport);
