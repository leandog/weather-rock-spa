import engine from "../engine";

const initialState = "";
const terminals = [
  "sunny",
  "night",
  "seeing_double",
  "raining",
  "snowing",
  "frost"
];

export default (state = initialState, action) => {
  const next = engine(state, action);
  return terminals.includes(next) ? next : initialState;
};
