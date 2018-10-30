export const assertName = name => {
  return {
    type: "ASSERT_NAME",
    name: name
  };
};

export const assertQuantity = number => {
  return {
    type: "ASSERT_QUANTITY",
    number: parseInt(number)
  };
};

export const assertCastsShadow = answer => {
  return {
    type: "ASSERT_CASTS_SHADOW",
    answer: answer
  };
};

export const assertCondition = answer => {
  return {
    type: "ASSERT_CONDITION",
    answer: answer
  };
};
