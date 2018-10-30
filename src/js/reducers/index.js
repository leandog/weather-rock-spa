import { combineReducers } from "redux";
import question from "./question";
import forecast from "./forecast";
import history from "./history";

export default combineReducers({
  question,
  forecast,
  history
});
