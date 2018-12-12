import {
  assertName,
  assertQuantity,
  assertCastsShadow,
  assertCondition
} from "./actions";

export default {
  // initial/intermediate facts
  "name": {
    label: {
      en: "What is your name?",
      es: "¿Cómo te llamas?"
    },
    input: {
      type: "text",
      action: assertName
    },
  },
  "quantity": {
    label: "How many rocks do you see?",
    input: {
      type: "select",
      action: assertQuantity,
      options: [
        { label: "One", value: "1" },
        { label: "Two", value: "2" }
      ]
    }
  },
  "casts_shadow": {
    label: "Does the rock cast a shadow?",
    input: {
      type: "yesno",
      action: assertCastsShadow
    }
  },
  "condition": {
    label: "What is the condition of the rock?",
    input: {
      type: "select",
      action: assertCondition,
      options: [
        { label: "Wet", value: "wet" },
        { label: "Covered with snow", value: "white" },
        { label: "Covered with frost and ice", value: "ice-coated" },
        { label: "Hard to see", value: "obscured" }
      ]
    }
  },

  // terminal facts
  "sunny": {
    label: "It's sunny."
  },
  "night": {
    label: "It't probably nighttime, so an accurate forecast is hard to predict."
  },
  "seeing_double": {
    label: "You sure you're seeing straight? There is only one rock."
  },
  "raining": {
    label: "It's raining."
  },
  "snowing": {
    label: "It's snowing."
  },
  "frost": {
    label: "There is a frost."
  }
};
