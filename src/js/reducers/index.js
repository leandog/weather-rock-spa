import { combineReducers } from "redux";
import question from "./question";
import forecast from "./forecast";
import history from "./history";
import lang from "./lang";

export default combineReducers({
  question,
  forecast,
  history,
  lang
});
