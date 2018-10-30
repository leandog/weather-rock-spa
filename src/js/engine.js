export default (state, action) => {
  switch (action.type) {
  case "ASSERT_NAME":
    return "quantity";
  case "ASSERT_QUANTITY":
    if (action.number === 2) {
      return "seeing_double";
    } else {
      return "casts_shadow";
    }
  case "ASSERT_CASTS_SHADOW":
    if (action.answer === "yes") {
      return "sunny";
    } else {
      return "condition";
    }
  case "ASSERT_CONDITION":
    if (action.answer === "wet") {
      return "raining";
    } else if (action.answer === "white") {
      return "snowing";
    } else if (action.answer === "ice-coated") {
      return "frost";
    } else {
      return "night";
    }
  default:
    return "name";
  }
};
