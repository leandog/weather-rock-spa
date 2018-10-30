import kb from "../kb";
import engine from "../engine";

const initialState = kb["name"];

export default (state = initialState, action) => {
  return kb[engine(state, action)];
};
