import React from "react";

class LanguageSwitcher extends React.Component {

  onClick(lang, e) {
    e.preventDefault();
    this.props.onSwitch(lang);
  }

  render() {
    return (
      <ul className="language-switcher">
        <li>Language:</li>
        <li><a href="#" onClick={this.onClick.bind(this, "en")}>English</a></li>
        <li><a href="#" onClick={this.onClick.bind(this, "es")}>Spanish</a></li>
      </ul>
    );
  }
}

export default LanguageSwitcher;
