import React from "react";
import { connect } from "react-redux";
import { TextInput, SelectInput, YesNoInput } from "./inputs";

const mapStateToProps = state => ({
  question: state.question,
  lang: state.lang
});

const mapDispatchToProps = dispatch => ({
  onAnswerQuestion: action => { dispatch(action) }
});

class Question extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const question = this.props.question;

    let answer;
    if (question.input.type === "text") {
      answer = e.target.querySelector("input[type='text']").value;
    } else if (question.input.type === "select") {
      answer = e.target.querySelector("select").value;
    } else if (question.input.type === "yesno") {
      answer = e.target.querySelector("input:checked").value;
    }

    const action = question.input.action(answer);
    this.props.onAnswerQuestion(action);
  }

  render() {
    const question = this.props.question;

    let inputField = null;
    if (question.input.type === "text") {
      inputField = <TextInput label={question.label[this.props.lang]} />;
    } else if (question.input.type === "select") {
      inputField = <SelectInput label={question.label} options={question.input.options} />;
    } else if (question.input.type === "yesno") {
      inputField = <YesNoInput label={question.label} />;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <p>Observe your weather rock, then answer the following question(s):</p>
        {inputField}
        <input type="submit" value="Continue" />
      </form>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
