const initialState = "en";

export default (state = initialState, action) => {
  return action.type === "SWITCH_LANGUAGE" ? action.lang : state;
};
