const initialState = [];

const watchedTypes = [
  "ASSERT_NAME",
  "ASSERT_QUANTITY",
  "ASSERT_CASTS_SHADOW",
  "ASSERT_CONDITION"
];

export default (state = initialState, action) => {
  return watchedTypes.includes(action.type) ? state.concat(action) : state;
};
