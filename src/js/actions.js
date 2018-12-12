import kb from "./kb";

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
    label: kb["casts_shadow"].label,
    answer: answer
  };
};

export const assertCondition = answer => {
  return {
    type: "ASSERT_CONDITION",
    label: kb["condition"].label,
    answer: answer
  };
};

export const switchLanguage = lang => {
  return {
    type: "SWITCH_LANGUAGE",
    lang: lang
  };
};
